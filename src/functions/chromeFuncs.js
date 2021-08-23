import * as bearlog from "./logFuncs";
/*global chrome*/

export function getLocalChrome(item, funcvar) {
  chrome.storage.local.get("CNumber", function (data) {
    console.log(data.CNumber);
    // fill('cardNumber', data.CNumber);
  });
}

export function fillInput(elementId, value) {
  let element = document.getElementById(elementId);
  console.log(element);
  if (element != null) {
    element.focus();
    element.value = assignment;
    console.log("successfully filled");
    element.blur();
  }
}

export function getAllStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}

export function getLocal(identVar) {
  // const date2 = new Date(localStorage.getItem("date"));
  const trueProd = localStorage.getItem(identVar);

  // const trueAll = trueProd;
  const trueAll = trueProd ? JSON.parse(trueProd) : "";
  const sadokawe = trueAll && trueAll.data;

  // bearlog.lug("___ cxvksf ___", cxvksf);

  return sadokawe;
}

export function deleteLocal(stringVar) {
  localStorage.removeItem(stringVar);
}

export function setLocal(stringVar, identVar) {
  const dateFirst = new Date();
  // const dateo = dateFirst.getTime();

  const oobo = {
    date: dateFirst,
    data: identVar,
  };

  const obVar = JSON.stringify(oobo);

  const itmget = localStorage.getItem(stringVar);

  bearlog.lug("___ localStorage ___", {
    stringVar,
    obVar,
    localStorage,
    itmget,
  });

  deleteLocal(stringVar);
  localStorage.setItem(stringVar, obVar);
}
