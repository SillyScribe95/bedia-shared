import { modelSubmit } from "../modelFuncs";
import * as logs from "../logFuncs";

// 1adduser 1saveuser
export function SaveUser(typeos, currentUser, listvar, endFunc) {
  //
  function asewq(asdfe) {
    logs.logga("___ saveUser AFTER  ___", asdfe);

    if (endFunc) {
      endFunc(asdfe);
    }
  }

  // 1LOG
  const lodoa =
    //
    // ""
    true;

  const oksdwe = {
    messvar: "SAVEUSER",
    logtrue: lodoa,
  };

  const ijsde = {
    // LIST: listvar,
    currentUser: currentUser,
    funcvar: asewq,
    ...oksdwe,
  };

  if (lodoa) {
    logs.logge(typeos + "___ saveUser ___", ijsde);
  }

  function asew9() {
    modelSubmit(typeos, listvar, ijsde);
  }

  if (currentUser) {
    asew9();
  } else {
    // openSignUp(asew9);
  }
}
