export function slugFunc(sdrsdfe, asdok = "") {
  var slugify = require("slugify");

  let iuhiij =
    //
    // "";
    // sdrsdfe;
    slugify(sdrsdfe, asdok);

  return iuhiij;
}

export function getType(sdrsdfe) {
  let arrtrue = Array.isArray(sdrsdfe);
  const getto = arrtrue ? "array" : typeof sdrsdfe;

  return getto;
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
  let sdfiewr = Array.isArray(sdrsdfe) ? "array" : typeof obb;

  return typeo ? sdfiewr == typeo : sdfiewr;
}

export function check(mainhso, noit = "") {
  return mainhso ? mainhso : noit;
}
