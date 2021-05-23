import {
  fireConnect,
  fireCreate,
  fireLogin,
  fireRegister,
  firesignoutFunc,
} from "./firebaseFuncs";
import * as logs from "./logFuncs";
import { getDocModel } from "./modelFuncs";
import { indexUser } from "../consts/constMain";
import { filtModelDocs, getDataBase } from "./backendFuncs";
import { getSlugName } from "./globalFuncs";

export function userConnect(...asds) {
  //

  fireConnect(...asds);
}

export function userSignOut(...saew) {
  firesignoutFunc(...saew);
}

export function getItemUser(obj) {
  const okawe = obj.userID;
  const dfrwqe = okawe ? okawe : obj.userObj && obj.userObj.id;

  return dfrwqe;
}

export function userLogSign(useo, passo, qwewq) {
  //

  function dsife(aqewc) {
    logs.logga("___ aqewc ___", aqewc);

    userRegister(useo, passo, qwewq);
  }

  const saokew = {
    errorFunc: dsife,
    ...qwewq,
  };

  userLogin(useo, passo, saokew);
}

export function userLogin(...asew) {
  fireLogin(...asew);
}

export function addFuncsUse(isoa) {
  const usernoe = getusedeets(isoa);

  const saidew = {
    baseUSER: isoa,
    deets: usernoe,
  };

  logs.logga("___ CREATING NEW USER ___", saidew);

  const aisjdew = usernoe.id;

  function oskddwqe(kvcbgf) {
    //
    logs.logga("___ CreateAdd ___", kvcbgf);
  }

  // getDocModel(indexUser, aisjdew).set(usernoe);
  getDataBase().collection(indexUser).doc(aisjdew).set(usernoe).then(oskddwqe);
  // add(usernoe);
  // db.collection("users").doc(aisjdew).set(usernoe);

  // NewUserSetup(usernoe);
}

export function creatUseAfter(...asew) {
  // {userObj , signUpTrue, newUser, funcvar}
  // let osdkfs = newUser && signUpTrue
  fireCreate(...asew);
}

export function userRegister(...asew) {
  fireRegister(...asew);
}

export function getusedeets(useo) {
  const sijwe = {
    name: useo.displayName,
    username: getSlugName(useo.displayName),
    imageAttr: useo.photoURL,
    id: useo.uid,
  };

  return sijwe;
}

export function getObjUser(obj) {
  const { data } = getDocModel(indexUser, obj.userID);
  return data;
}

export function getUserName(obj) {
  // let kasew = obj?.firstname  && obj?.lastname
  // return kasew ?  :
  return obj.username;
  // return obj?.username;
}
