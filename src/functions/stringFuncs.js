import { removeEmptyArray, turnarray } from "./arrayFuncs";
import * as bearlog from "./logFuncs";

export function spaceSurround(stringVar) {
  // eeeeee
  return " " + stringVar + " ";
}

export function quoteSurround(stringVar) {
  // eeeeee
  return "'" + stringVar + "'";
}

export function arrayinstring(string, array) {
  let noThere = "";

  for (var i = 0; i < array.length; i++) {
    noThere = string.includes(array[i]);
    if (noThere) {
      break;
    }
  }

  return noThere;
}

export function stringinstring() {}

export function joinString(zxcvds, aase, qwe = {}) {
  return sdaeter(zxcvds, aase, qwe);
}

export function sdaeter(arrayo, strngo = "", { lastJoin = "" }) {
  arrayo = turnarray(arrayo);
  arrayo = removeEmptyArray(arrayo);
  const okasd = arrayo ? sijqw() : "";

  function sijqw() {
    const endo = !lastJoin ? "" : arrayo[-1];

    arrayo = !lastJoin ? arrayo : arrayoslice(0, -2);

    arrayo = arrayo.join(strngo);
    arrayo = !endo ? arrayo : [...arrayo, ...[endo]].join(lastJoin);

    return arrayo;
  }

  return okasd;
}

export function joinExisting(arrayo, s = "", first = "") {
  arrayo = arrayo.map(ibfdgds);
  bearlog.lug("joinEsting--AAAA", arrayo);
  arrayo = joinString(arrayo, s);
  bearlog.lug("joinExiting--bbb", arrayo);

  function ibfdgds(xcvb) {
    bearlog.lug("xcvb--", xcvb);
    return sdfokr(xcvb);
  }

  function sdfokr([item, joinedel]) {
    bearlog.lug("item, joinedel---", { item, joinedel });

    const endo = !item ? "" : joinedel ? joinedel : item;

    return endo;
  }

  return arrayo;
}

export const getExtString = (sdfweq) => {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(sdfweq)[1];

  return ext;
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
