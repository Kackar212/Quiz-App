import { authPost, refreshToken } from "./api";

export function getKeys(path) {
    return path.replace(/\[(\d*)\]/g, ":array.$1").split(".");
}

export function put(path = "", obj, value) {
    const keys = getKeys(path);
    let currObj = obj || {};
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        if (typeof value === 'function') {
          value(currObj[key]);
        } else {
          currObj[key] = value;
        }
      }

      currObj = currObj[key];
    });

    return obj;
} 

export function getFromPath(path, obj, defaultValue = "") {

    const keys = getKeys(path);

    return keys.reduce((prev, curr) => {
      if (typeof prev[curr] === "undefined") return defaultValue;
      return (prev = prev[curr]);
    }, obj || {});
}

export function createFromPath(path, value, obj = {}) {
  let currObj = obj;
  const keys = getKeys(path).map((key) => key.split(":"));
  keys.forEach((key, index) => {
    const [keyName, type] = key;
   
    if (index < keys.length - 1) {
      if (!currObj[keyName]) {
        currObj[keyName] = type ? [] : {};
      }
      currObj = currObj[keyName];
    }

    if (index === keys.length - 1) {
      currObj[keyName] = value;
    }
  });

  return obj;
}

export function hasErrors(...arrays) {
  return !!arrays.flat(Infinity).length; 
}

export function isEmpty(arr = []) {
  return !arr.length;
}

export function createCookie(cookieName, value, options) {
  const { onExpire, ...rest } = options;

  setTimeout(onExpire, (rest['max-age'] + 10) * 1000);
  
  const parsedOptions = Object.entries(rest).map(([k, v]) => `${k}=${v};`).join(' ');
  document.cookie = `${cookieName}=${value}; ${parsedOptions}`;
}

export function getCookie(cookieName) {
  const reg = new RegExp(`(?<=${cookieName}=)(.*)(?=;|)`, 'g');

  const [cookie] = document.cookie.match(reg) || [];

  if (cookie) {
    return JSON.parse(cookie);
  }
}

export function removeCookie(cookieName) {
  const cookie = getCookie(cookieName);
  document.cookie = `${cookieName}=${JSON.stringify(cookie)}; max-age=-1;`;

  return !!getCookie(cookieName);
}

export async function isAuth() {
  const cookie = getCookie('user');

  if (!cookie) {
    const response = await refreshToken();
    
    return response.statusCode !== 401;
  }

  return !!cookie;
}

export async function logout(setAuth) {
  setAuth(false);
  removeCookie('user');
  return authPost('auth/logout');
}
