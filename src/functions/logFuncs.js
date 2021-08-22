import prettyFormat from "pretty-format";

export function lug(...asw) {
  // bearlog.lug(messageIt, valY);
  // console.log("--luggo--", ...asw);
}

export function log(...asw) {
  // console.log("loggo BASE-", ...asw);
  console.log(" loggo --- ", ...asw);
  // baseLog(asw)

  // bearlog.lug('bearlog.lug:', bearlog.lug)
}

export function logCheck(name, first, ...asw) {
  const asuhw =
    //
    name == first;

  //
  if (asuhw) {
    log(...asw);
  }
}

function baseLog(o) {
  const arro = Array.isArray(o);
  const obkjo = typeof o === "object";

  const doTable =
    //
    arro || obkjo;

  // console.log("log--aaaa", {
  //   o: o,
  //   doTable: doTable,
  // })
  console.log(o);

  // if (doTable){
  //   console.table(o)
  // } else {
  //   console.log(o)
  // }
}

export function logge(...sdf) {
  log(...sdf);
  // bearlog.lug('bearlog.lug:', bearlog.lug)
}

export function loggu(...sdf) {
  // log(...sdf)
}

export function logJSON(messageIt, valY, ...asw) {
  let sodase =
    //
    // JSON.stringify(valY)
    prettyFormat(valY);

  console.log("log--", messageIt, sodase, ...asw);
  // bearlog.lug('bearlog.lug:', bearlog.lug)
}

//   export function lug(messageIt, valY) {
//     bearlog.lug(messageIt, valY);
//   }

export function logLines(nubfd) {
  let saodkwe = "-";
  for (let i = 0; i < nubfd; i++) {
    saodkwe += "-";
    log(saodkwe);
  }
}

export function logLinas(...sdf) {
  // log(...sdf)
}
