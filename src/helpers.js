export function getKeys(path) {
    return path.replace(/\[(\d*)\]/g, ".$1").split(".");
}

export function put(path = "", obj, value) {
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
