import { authPost, refreshToken } from "./api";

export function getKeys(path) {
    return path.replace(/\[(\d*)\]/g, ":array.$1").split(".").map((key) => key.split(":"));
}

export function put(path = "", obj, value) {
    const keys = getKeys(path);
    let currObj = obj || {};
    keys.forEach(([key], index) => {
      if (index === keys.length - 1) {
        if (typeof value === 'function') {
          value(currObj[key], currObj, key);
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

    return keys.reduce((prev, [key]) => {
      if (typeof prev[key] === "undefined") return defaultValue;
      return (prev = prev[key]);
    }, obj || {});
}

export function createFromPath(path, value, obj = {}) {
  let currObj = obj;
  const keys = getKeys(path);
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

export function createCookie(cookieName, value, options = {}) {
  const { onExpire, ...rest } = options;

  onExpire && setTimeout(onExpire, (rest['max-age'] + 10) * 1000);
  
  const parsedOptions = Object.entries(rest).map(([k, v]) => `${k}=${v};`).join(' ');
  document.cookie = `${cookieName}=${JSON.stringify(value)}; ${parsedOptions}`;
}

export function getCookie(cookieName) {
  const reg = new RegExp(`(?<=${cookieName}=)(.*)(?=;|)`, 'g');

  const [cookie] = document.cookie.match(reg) || [];

  if (cookie) {
    return JSON.parse(cookie);
  }
}

export function removeCookie(cookieName) {
  const [_, path] = document.baseURI.split('/');

  document.cookie = `${cookieName}=; Max-Age=-1; path=/${path};`;

  return !!getCookie(cookieName);
}

export async function isAuth(setUser) {
  const cookie = getCookie('user');

  if (!cookie) {
    const response = await refreshToken();
    const isLoggedIn = response.statusCode !== 401;

    if (isLoggedIn) {
      createCookie('user', response, { 'max-age': 1200, path: '/' })
      setUser(response);
    }

    return isLoggedIn;
  }

  setUser(cookie);

  return true;
}

export async function logout(setAuth) {
  await authPost('auth/logout');
  removeCookie('user');
  localStorage.setItem('auth', false);
  setAuth(false);
}
