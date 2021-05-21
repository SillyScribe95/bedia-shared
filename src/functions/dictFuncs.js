import * as logs from "./logFuncs";

export function turnDict(dictvar) {
  return Object.entries(dictvar);
}

export function mapDictAttr(obj, dictvar) {
  for (const [key, value] of Object.entries(dictvar)) {
    obj[key] = value;
  }

  return obj;
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

export function createNewDictFromAttr(arrvar, attr) {
  var oksae = {};
  arrvar.map(function (wewq) {
    logs.logga("___ createNewDictFromAttr aaaa ___", oksae);
    oksae[wewq[attr]] = wewq;
    logs.logga("___ createNewDictFromAttr BBBB ___", oksae);
  });

  logs.logga("___ createNewDictFromAttr END ___", oksae);

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

    logs.logga("___ convertObjDict ORIG ___", ijadew);

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

  logs.logga("___ convertObjectDict ___", oaskdew);

  //   aodks
  return oaksde;
}

// export function mapDictFunc(doct ){

//     reutn

// }
