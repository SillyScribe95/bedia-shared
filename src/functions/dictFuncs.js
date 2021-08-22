import { maplisttostring, turnarray } from "./arrayFuncs";
import { getType } from "./globalFuncs";
import * as bearlog from "./logFuncs";
import { joinString } from "./stringFuncs";

export function turnDict(dictvar) {
  return Object.entries(dictvar);
}

export function objectTrue(dictvar) {
  return typeof dictvar == "object";
}

// 1match
export function matchDictAttr(vlbdf, string, attr) {
  for (const [key, value] of Object.entries(vlbdf)) {
    const ndifvd = attr ? value[attr] : value;
    if (ndifvd == string) {
      return value;
      break;
    }
  }
}

export function getAnyDictValue(vlbdf) {
  if (vlbdf) {
    for (const [key, value] of Object.entries(vlbdf)) {
      if (!value) {
        return key;
      } else {
        // return false;
      }
    }
  }
}

export function checkDict(dictvar, cxzvd) {
  const asdrae = dictvar
    ? {
        listItemName: cxzvd,
        ...dictvar[cxzvd],
      }
    : cxzvd;

  return asdrae;
}

// 1attr
export function getDictvalues(dict, attr = "value") {
  let obj = {};
  for (const [key, value] of Object.entries(dict)) {
    let inVal = "";
    const sderase = getType(value);
    bearlog.lug("getDictvalues TYPEODF-zzz", { value, sderase });

    switch (sderase) {
      case "array":
        inVal = value.map((sdofr) => sdofr[attr]);
        break;
      case "object":
        inVal = value[attr];
        break;
      default:
        inVal = value;
    }
    obj[key] = inVal;
  }

  return obj;
}

export function mapDictAttr(obj, dictvar) {
  for (const [key, value] of Object.entries(dictvar)) {
    obj[key] = value;
  }

  return obj;
}

export function mapDictNew(dictvar, nqeo) {
  const iase = {};
  for (const [key, value] of Object.entries(dictvar)) {
    const sdoeae = {
      ...value,
      ...nqeo,
    };
    iase[key] = sdoeae;
  }

  return iase;
}

export function mapDictAttrToString(...zxcv) {
  return maplisttostring(...zxcv);
}

export function removeEmptyDict(obj) {
  // obj = JSON.parse(JSON.stringify(obj));
  // // listArray = _.pickBy(listArray, _.identity);

  // for (var propName in obj) {
  //   if (obj[propName] === null || obj[propName] === undefined) {
  //     delete obj[propName];
  //   }
  // }

  // return obj;
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

export function removeKeyDict(params, itemo) {
  delete params[itemo];
  // omit(params, itemo)

  return params;
}

export function removeKeyList(parmas, listo) {
  listo.map(function (wewq) {
    parmas = removeKeyDict(parmas, wewq);
  });

  return parmas;
}

export function mapDictVals(dictvar) {
  const toksaew = [];
  for (const [key, value] of Object.entries(dictvar)) {
    toksaew.push(value);
  }

  return toksaew;
}

export function mapDictKey(dictvar) {
  const toksaew = [];
  for (const [key, value] of Object.entries(dictvar)) {
    toksaew.push(key);
  }

  return toksaew;
}

// 1map

export function mapDictFunc(dictvar, dictfunc) {
  const ijsdase = {};
  for (const [key, value] of Object.entries(dictvar)) {
    ijsdase[key] = dictfunc(value);
  }

  return ijsdase;
}

export function mapDictKeyToValue(dict, attr) {
  const sdjfer = {};

  for (const [key, value] of Object.entries(dict)) {
    const jsfer = {
      [attr]: key,
      ...value,
    };

    sdjfer[key] = jsfer;
  }

  return sdjfer;
}

export function createNewDictFromAttr(arrvar, attr) {
  var oksae = {};
  arrvar.map(function (wewq) {
    bearlog.lug("___ createNewDictFromAttr aaaa ___", oksae);
    oksae[wewq[attr]] = wewq;
    bearlog.lug("___ createNewDictFromAttr BBBB ___", oksae);
  });

  bearlog.lug("___ createNewDictFromAttr END ___", oksae);

  return oksae;
}

export function convertObjectDict(obj) {
  function odkaeww(key) {
    let okdsa = {
      [key]: obj[key],
    };

    const ijadew = {
      key: key,
      obj: obj,
      okdsa: okdsa,
    };

    bearlog.lug("___ convertObjDict ORIG ___", ijadew);

    return okdsa;
  }

  let iase = Object.keys(obj);
  let oaksde = iase.map(odkaeww);

  let oaskdew = {
    //

    ORIGINAL: obj,
    KEYS: iase,
    FINAL: oaksde,
  };

  bearlog.lug("___ convertObjectDict ___", oaskdew);

  //   aodks
  return oaksde;
}

// export function mapDictFunc(dictvar, dictfunc) {
//   const ijsdase = {};
//   for (const [key, value] of Object.entries(dictvar)) {
//     ijsdase[key] = dictfunc(value);
//   }

//   return ijsdase;
// }
