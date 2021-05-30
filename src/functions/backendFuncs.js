import {
  FireModel,
  getFirestore,
  getFire,
  fireEdit,
  fireInit,
  FireUser,
  getMapFire,
} from "./firebaseFuncs";
import { getFauna } from "./faunaFuncs";
// import { GraphArgo } from "./graphFuncs";
import * as logs from "./logFuncs";

// import {
//   removeEmptyDict,
//   getSlugName,
//   turnarray,
//   logBase,
//   addLinkArr,
//   postJSON,
//   getFirstArr,
// } from "../GlobalFunctions";

//
//
export function backendInit(typevar, config, { fireObj }) {
  switch (typevar) {
    case "firebase":
    // fireObj.initializeApp(config);
    // fireObj.analytics();
  }
}

export function editBase(typevar, idvar, tyope) {
  const ijwsdf = {
    typevar: typevar,
    listvar: idvar,
    ...tyope,
  };

  logs.logga("___ editBase ___", ijwsdf);

  return fireEdit(ijwsdf);
}

export function GetUser(functrion) {
  // const dfuew =
  //   //
  //   FireUser();

  // logs.logga("___ GetUser ___", dfuew);

  return FireUser();
  // return fireRet(FireUser());
}

export function GetUserApps(ds, we, qwe) {
  return filtModelArr(ds, we, qwe && { userID: qwe.id });
}

export function GetUserObjs(typeos, useos, saodkwe) {
  // const sdofkr = {
  //   messvar: "getHigsers---",
  //   keyvar: "userID",
  //   valuevar: user?.id,
  //   // todayTrue: true,
  //   // feedTrue: true,
  //   // docvar: user,
  //   // funcvar:
  //   ...saodkwe,
  // };

  //
  return filtModel(
    typeos,
    "userID",
    useos.id,
    saodkwe
    // sdofkr
    // user
    // retBase
  );
}

// export function fetchBase(urvcxdsl, argMaino, funco) {
//   const sijdwe = addLinkArr(urvcxdsl);
//   const stripeos = postJSON(argMaino);

//   const ijsvcbfdgfdad = {
//     sijdwe: sijdwe,
//     ARGS: argMaino,
//     // POST: stripeos,
//   };

//   logs.logga("___ fetchBase ___", ijsvcbfdgfdad);

//   fetch(sijdwe, stripeos)
//     .then(function (response) {
//       logs.logga("___ response ___", response);

//       return response.json();
//     })
//     .then(function (session) {
//       logs.logga("___ session ___", session);

//       if (funco) {
//         funco(session);
//       }
//       // return asuhdwe;
//     })
//     .catch(function (error) {
//       logs.logga("___ error ___", error);
//       console.error("Error:", error);
//     });
// }

export function filtMain(typevar, { messvar, logtrue, ...ijasw }) {
  if (logtrue) {
    logs.logga(messvar + "___ fiMain ___", ijasw);
  }

  let ksde = {
    typevar: typevar,
    ...ijasw,
  };

  // return {data: "", loading: ""}
  return getFire(ksde);
  // return getFauna(ksde);
}

// 1filtmodel
export function filtModel(dfgewr, keyvar, valvar, asodwe) {
  const ijasw = {
    keyvar: keyvar,
    valuevar: valvar,
    boolvar: valvar,
    boolTrue: keyvar && true,
    ...asodwe,
  };

  logs.logga("___ filtModel BASE ___", ijasw);

  return filtMain(dfgewr, ijasw);
}

export function filtModelDocs(dfgewr, idlist, asodwe) {
  const ijasw = {
    keyvar: "uid",
    valuevar: idlist,
    ...asodwe,
  };

  return filtModel(dfgewr, ijasw);
}

export function filtModelArr(ds, we, qwe, asodwe = {}) {
  asodwe = {
    wherevar: "array-contains",
    ...asodwe,
  };
  return filtModel(ds, we, qwe, asodwe);
}

export function filtModelin(ds, we, qwe, asodwe = {}) {
  asodwe = {
    wherevar: "in",
    ...asodwe,
  };

  return filtModel(ds, we, qwe, asodwe);
}

export function filtModelMany(ds, sfdgr, asodwe) {
  asodwe = {
    whereDict: sfdgr,
    // wherevar: "in",
    ...asodwe,
  };
  return filtMain(ds, asodwe);
}

// 1getdb
export function getDataBase() {
  const db = getFirestore();

  return db;
}

// 1editmodel 1savemodel 1model 1getmodel
export function saveModel(typevar, argMaino, funco) {
  const argFnd = {
    typevar: typevar,
    singleTrue: true,
    returnBase: true,
    ...argMaino,
    // ...sdfokww,
  };

  fetchBase("edit_model", argFnd, funco);
}

// 1updatemodel
export function editModel(typevar, listvar, keyvar, valuevar, asodkwe) {
  //
  const ijwsdf = {
    typevar: typevar,
    // fetchArgs: {
    //   typevar: typevar,
    //   docvar:
    // }
    listvar: listvar,
    keyvar: keyvar,
    valuevar: valuevar,
    logtrue: true,
    ...asodkwe,
  };

  logs.logga("___ editModel ___", ijwsdf);

  return fireEdit(ijwsdf);
}

export function saveModels(typevar, argMaino, funco) {
  const argFnd = {
    typevar: typevar,
    ...argMaino,
    // ...sdfokww,
  };

  fetchBase("edit_model", argFnd, funco);
}

// 1addModel

export function changeHighWatch(highvar, uservar) {
  const jase =
    //
    // highvar
    highvar.media && highvar.media.id;

  const endio =
    //
    jase;

  let cxvdsdie = {
    watchList: endio,
  };

  if (uservar) {
    editModel("user", uservar.id, cxvdsdie);
  }
}
