export function getKeys(path) {
    return path.replace(/\[(\d*)\]/g, ".$1").split(".");
}

export function put(path = "", obj, value, newObj = false) {
    
    const keys = getKeys(path);
    let currObj = obj || {};
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        currObj[key] = value;
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
