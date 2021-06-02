// import * as logs from "../functions/logFuncs"

import prettyFormat from "pretty-format";

export function logga(messageIt, valY) {
  // logs.logga(messageIt, valY);
}

export function loggo(...asw) {
  console.log("loggo--", ...asw);
  // logs.logga('logs.logga:', logs.logga)
}

export function logge(...asw) {
  console.log("loggo--", ...asw);
  // logs.logga('logs.logga:', logs.logga)
}

export function logJSON(messageIt, valY, ...asw) {
  let sodase =
    //
    // JSON.stringify(valY)
    prettyFormat(valY);

  console.log("loggo--", messageIt, sodase, ...asw);
  // logs.logga('logs.logga:', logs.logga)
}

//   export function logga(messageIt, valY) {
//     logs.logga(messageIt, valY);
//   }
