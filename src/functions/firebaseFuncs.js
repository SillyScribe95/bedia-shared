// import "firebase/firestore";
// import * as auth from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as logs from "./logFuncs";
import { ModelCatch } from "./modelFuncs";
import { addFuncsUse, creatUseAfter } from "./userFuncs";
import { getDataBase } from "./backendFuncs";
import { turnarray } from "./arrayFuncs";
// import UseFirestoreQuery from "./firestoreFuncs";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {

//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

var firebaseConfig = {
  apiKey: "AIzaSyCTNAVPnCcrNJV1wEzObL-Ky6UGvUeuZMU",
  authDomain: "test-bediab.firebaseapp.com",
  projectId: "test-bediab",
  storageBucket: "test-bediab.appspot.com",
  messagingSenderId: "883595134259",
  appId: "1:883595134259:web:faea61357a081300b56a46",
  measurementId: "G-4WV7DT0V17",
};

firebase.initializeApp(firebaseConfig);
let autho =
  //
  firebase.auth();
const db = firebase.firestore();

// logs.logga("___funcs GO firebase ___", firebase);

export function getFirestore() {
  return db;
}

function getAuth(messo) {
  let adwe = firebase.auth();

  logs.logga(messo + "___ getAuth ___", adwe);

  return adwe;
}

export function FireUser(funtion) {
  // const use =
  const [user, loading, error] =
    //
    firebase.auth();
  // firebase.auth().onAuthStateChanged()
  // getAuth("userSign");
  // useAuthState(firebase.auth());

  const BaseRRue =
    //
    user;
  // awiejw;
  // awiejw?.currentUser;
  // getFirstArr(user);
  // awiejw?.ba;

  function fireRet(saijdwe) {
    const dswease = {
      name: saijdwe.displayName,
      imageAttr: saijdwe.photoURL,
      id: saijdwe.uid,
    };

    return dswease;
  }

  let skmae = BaseRRue && fireRet(BaseRRue);

  const oaksda = {
    data: skmae,
    loading: loading,
    error: error,
  };

  logs.logga("___ FireUser ___", {
    BaseRRue: BaseRRue,
    skmae: skmae,
  });

  return oaksda;
  // return (funtion);
}

// 1signout
export function firesignoutFunc() {
  let dsofkes =
    //
    "";
  // firebase.auth().GoogleAuthProvider();
  // .signInWithPopup(dsofkes)

  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

export function loginPop() {
  let dsofkes =
    //
    "";
  // firebase.auth().GoogleAuthProvider();
  // .signInWithPopup(dsofkes)
}

export function fireCreate(user, funceos) {
  const extraInfo = user.additionalUserInfo;
  const userBase = user.user;
  var usernew =
    //
    // true;
    extraInfo.isNewUser;

  if (funceos) {
    funceos(userBase);
  }

  if (usernew) {
    addFuncsUse(userBase);
  }

  // var token = result.credential.accessToken;
  // user = result.user;

  const seasew = {
    main: user,
    extraInfo: extraInfo,
    NEW: usernew,
  };

  logs.logga("firCreate ", seasew);

  // set account  doc
  // const account = {
  //   useruid: userUid,
  //   calendarEvents: [],
  // };
}

export function fireEmail(email, actionCodeSettings) {
  firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

export function errCreate(params, funcvar) {
  //
}

export function fireRegister(email, password, { funcvar, errorFunc }) {
  autho
    .createUserWithEmailAndPassword(email, password)
    .then(creatUseAfter)
    .catch(errorFunc);
}

export function fireLogin(email, password, { funcvar, errorFunc }) {
  autho
    .signInWithEmailAndPassword(email, password)
    .then(creatUseAfter)
    .catch(errorFunc);
}

export function fireConnect(typeVar, funcvar) {
  //   getAuth();

  let dsofkes = "";
  switch (typeVar) {
    case "google":
      dsofkes = new firebase.auth.GoogleAuthProvider();
      break;
    case "facebook":
      dsofkes = new firebase.auth.FacebookAuthProvider();
      break;
    case "twitter":
      dsofkes = new firebase.auth.TwitterAuthProvider();
      break;
    // case "instagram":
    //     dsofkes = new firebase.auth.TwitterAuthProvider();
    //     break;
    // }
    default:
  }

  function aokdw(sdfew) {
    creatUseAfter(sdfew, funcvar);
  }

  autho.signInWithPopup(dsofkes).then(aokdw).catch(errCreate);
}

// db.settings({
//   timestampsInSnapshots: true,
// });
// export function get

export async function fireEdit({
  typevar,
  listvar,
  keyvar,
  notPresent,
  valuevar,
  errorFunc,
  attrType = "",
  logtrue,
  funcAfter,
  // funcvar,
}) {
  //
  //
  logtrue = "rew";

  // logs.logga("___ dbMain ___", dbMain);

  function switchIt(sdfgre) {
    let endValue = valuevar;
    switch (sdfgre) {
      case "array":
        endValue = firebase.firestore.FieldValue.arrayUnion(valuevar);
        // endValue = db.FieldValue.apply(this, myArray);

        // firebase.firestore.FieldValue.arrayUnion.apply(this, myArray)
        break;
    }

    logs.logga("___ switchIt ___", {
      sdfgre: sdfgre,
      endValue: endValue,
    });

    return endValue;
  }

  const jweqaw = attrType ? switchIt(attrType) : valuevar;

  // { id, ...safweq }
  function asde(id) {
    //
    //
    let osawe = getFire({
      typevar: typevar,
      docvar: id,
    });

    const oksa = {
      // kevar: value,
    };

    if (logtrue) {
      logs.logga("___ firdit: OBJECT BBB ___", {
        object: osawe,
        keyvar: keyvar,
        attribute: jweqaw,
      });
    }

    function aoskdwe(asdfo) {
      //

      let xvobker =
        //
        osawe;
      // osawe.data();

      logs.logga("___ aoskdwe ___", {
        asdfo: asdfo,
        xvobker: xvobker,
        osawe: osawe,
      });

      if (funcAfter) {
        funcAfter(xvobker);
      }
    }

    function aosdw(sdfe) {
      let vcbgsdr = sdfe["keyvar"];
      return !vcbgsdr;
    }

    let ksdsae = notPresent && osawe;
    let sdsaec = ksdsae ? aosdw(osawe) : osawe;

    if (sdsaec) {
      // osawe.update(ekyvar, jweqaw).then(funcAfter);
      osawe.update(keyvar, jweqaw).then(aoskdwe).catch(errorFunc);
    }
  }

  // listvar).map(asde);
  turnarray(listvar).map(asde);
}

export function addHighlight(typevar, data, user) {
  //   db.collection(typevar)
  //     // .doc(user)
  //     // .collection("booksList")
  //     .doc(myBookId)
  //     .set();
}

// export function fireFuncAdd() {}

// 1MODEL 1add 1delete
export async function FireModel({
  typevar,
  newID,
  fetchArgs,
  docvar,
  addArgs,
  funcvar,
  errorFunc,
  logtrue,
  messvar,
}) {
  //

  function idjeq(sdokfr, sdpkfew) {
    const osdkf =
      //
      "asdq";
    // logtrue;

    if (osdkf) {
      logs.logga(messvar + sdokfr, sdpkfew);
    }
  }

  const dfogkrt = {
    typevar: typevar,
    docvar: docvar,
  };

  idjeq(typevar + "___ FiModel GET___", dfogkrt);

  const osawe =
    //
    getFire({
      ...dfogkrt,
      ...fetchArgs,
    });

  function logDOSAW(adsfr) {
    //
    let osakw =
      //
      adsfr.exists;
    // adsfr.data();

    const idsfd =
      //
      ModelCatch(addArgs);

    let dsifje =
      //
      osakw && idsfd;

    idjeq(typevar + "___ FireMdel JUST GOTTEN: WHAT NEXT? ___", {
      BASIC: osawe,
      GET_DATA: adsfr,
      ADD_DETAILS: addArgs,
      EXISTS_TRUE: osakw,
      FOUND_TRUE: idsfd,
      goingToAdd: dsifje,
    });

    // 1time
    let currotIMte =
      //
      firebase.firestore.FieldValue.serverTimestamp();

    let sdofer = {
      ...addArgs,
      createdAt: currotIMte,
      modifiedAt: currotIMte,
    };

    function asodkwe(dataoi) {
      //

      idjeq("___ FUREBASE ADD DATA aaaaa ___", dataoi);

      let sfdokewe = {
        id: dataoi.id,
        ...sdofer,
      };

      let aoskew =
        //
        sfdokewe;
      // asokdwe(dataoi);

      let slkdmwe = {
        WITHARGS: sfdokewe,
        RAW: dataoi,
        SNAPSHOT: aoskew,
      };

      idjeq("___ FUREBASE ADD DATA bbbb ___", slkdmwe);

      if (funcvar) {
        funcvar(aoskew);
      }
    }

    if (newID) {
      idjeq("_NEW_ID__ FireMdel ___" + newID, osawe);

      getDataBase()(typevar)
        .doc(newID)
        .set(addArgs)
        .then(asodkwe)
        .catch(errorFunc);
    }

    if (!dsifje) {
      idjeq("___ FUREBASE ADD NEW ITEM BEFORE ___", sdofer);

      // 1add
      osawe.add(sdofer).then(asodkwe).catch(errorFunc);
    } else {
      switch (typevar) {
        case "delete":
          idjeq("_DELETE__ FireMdel ___", osawe);

          // osawe.remove();
          osawe.delete();
          break;
        default:
          let sdofer = {
            ...addArgs,
            modifiedAt: currotIMte,
          };

          idjeq("_UPDATE FireMdel ___", {
            OBJECT: osawe,
            updateITEMS: sdofer,
          });

          osawe.update(sdofer).then(asodkwe).catch(errorFunc);
      }
    }
  }

  //
  // let { data: osawe, ...sasa } = FireFilt(fetchArgs);
  osawe.get().then(logDOSAW);
  // getFire(fetchArgs).onSnapshot((response) => response);
  // await fireGetExpand(getFire(fetchArgs));
  // let sasa = {};
  //
  //

  // let odawe = {
  //   //
  //   data: osawe,
  //   // ...sasa,
  // };
  //
  // .doc(xocve)
  // .set(sdijf);
  // return odawe;
}

// 1key
function getKeybase(zxcvf) {
  const oksdfsa = {
    id: firebase.firestore.FieldPath.documentId(),
    // slugURL:
  };

  const oksae = oksdfsa[zxcvf];
  const erokv = oksae ? oksae : zxcvf;

  return erokv;
}

function asokdwe(sdfoker) {
  logs.logga("___ sdfoker ___", sdfoker);

  let ew9r = sdfoker.get();
  let saod = {
    id: sdfoker.id,
    ...ew9r,
    // ...sdfoker,
  };

  return saod;
}

// 1filtmodel
export function getFire({
  typevar,
  keyvar,
  // WHERE
  wherevar = "==",
  whereDict,
  valuevar,
  docvar,
  //
  //
  logtrue,
  messvar = "",
  funcvar,
  boolvar,
  boolTrue,
  limitvar,
  addTrue,
  orderTrue,
  orderDateTrue,
  orderType,
}) {
  // 1getfire

  keyvar = keyvar && getKeybase(keyvar);

  const botheo =
    //
    // where
    keyvar && valuevar;

  const saidwqe = {
    typevar: typevar,
    docvar: docvar,
    //
    // 1both
    botheo: botheo,
    //
    // WHERE
    wherevar: wherevar,
    whereDict: whereDict,
    //
    keyvar: keyvar,
    valuevar: valuevar,
    //
    //
    funcvar: funcvar,
    boolvar: boolvar,
    boolTrue: boolTrue,
    limitvar: limitvar,
  };

  logs.logga(messvar + "___ gFIre AAAA ___", saidwqe);

  let sfdgre = db.collection(typevar);

  function filtWhere(xcasdwv, dfae) {
    for (const [key, value] of Object.entries(dfae)) {
      let osakd = {
        DATABASE: xcasdwv,
        key: key,
        value: value,
      };
      logs.logga("filtWhere--zz", osakd);

      xcasdwv = xcasdwv.where(key, "==", value);
    }

    return xcasdwv;
  }

  function mainGo() {
    if (logtrue) {
      logs.logga(messvar + "___ geIre collection ___", saidwqe);
    }

    let refMod = docvar ? sfdgre.doc(docvar) : sfdgre;

    // myCollection.where(firestore.FieldPath.documentId(), 'in', ["123","456","789"])

    let sdfgrt =
      //
      // refMod;
      botheo
        ? refMod.where(keyvar, wherevar, valuevar)
        : whereDict
        ? filtWhere(refMod, whereDict)
        : refMod;

    orderType = orderType ? orderType : orderDateTrue ? "createdAt" : "";
    // orderType,

    let fdsew0 =
      //
      // ofdg0r;
      orderType ? sdfgrt.orderBy(orderType, "desc") : sdfgrt;

    let aosdfkew = limitvar ? fdsew0.limit(limitvar) : fdsew0;

    let serijer = funcvar ? funcvar(aosdfkew) : aosdfkew;
    return serijer;
  }

  let dsaors =
    //
    // "";
    boolTrue ? boolvar && mainGo() : mainGo();

  const truFind = addTrue && !dsaors;

  if (logtrue) {
    let osakdw = {
      dsaors: dsaors,
      addTrue: addTrue,
      truFind: truFind,
    };
    logs.logga(messvar + "___ gFIre ANY AND ADD IF NOT ___", osakdw);
  }

  if (truFind) {
    let osd = sfdgre.add(whereDict);
    return osd;
  }

  if (logtrue) {
    logs.logga(messvar + "___ gFIre BBBBB ___", dsaors);
  }

  return dsaors;
}

export function FireHook({ funcvar, ...ijasw }) {
  // return UseFirestoreQuery(getFire(ijasw), funcvar);
}

export function FireAdd(ijasw) {
  FireModel(ijasw);
  // return UseFirestoreQuery(ijasw && FireModel(ijasw));
}
