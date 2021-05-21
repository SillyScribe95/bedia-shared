import { turnarray } from "./arrayFuncs";

export function spaceSurround(stringVar) {
  // eeeeee
  return " " + stringVar + " ";
}

export function quoteSurround(stringVar) {
  // eeeeee
  return "'" + stringVar + "'";
}

export function joinString(arrayo, strngo = "", first = "") {
  arrayo = turnarray(arrayo);
  const okasd = arrayo ? arrayo.join(strngo) : "";

  return okasd;
}
