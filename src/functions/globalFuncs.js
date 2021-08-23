export function slugFunc(sdrsdfe, asdok = "") {
  var slugify = require("slugify");

  let iuhiij =
    //
    // "";
    // sdrsdfe;
    slugify(sdrsdfe, asdok);

  return iuhiij;
}

export function getMinMax(min, max) {
  min = parseFloat(min);
  max = parseFloat(max);

  const overit = max <= min;

  max = overit ? null : max;

  return { min, max };
}

export function getType(...sdrsdfe) {
  return checkType(...sdrsdfe);
}

// 1random
export function getRandomArray(myArray) {
  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

  return randomItem;
}

export function getSlugName(sdrsdfe) {
  return slugFunc(sdrsdfe);
}

export function checkType(obb, typeo) {
  let sdfiewr = Array.isArray(obb) ? "array" : typeof obb;

  return typeo ? sdfiewr == typeo : sdfiewr;
}

export function check(mainhso, noit = "") {
  return mainhso ? mainhso : noit;
}
