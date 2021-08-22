// import { getRegexURL } from "./globalFunc";
import * as bearlog from "../functions/logFuncs";
import { getFirstArr, mapArrFunc, removeEmptyArray } from "./arrayFuncs";

// import { getCurrTime } from "./playerFuncs";
// import { openBediaNew } from "./chromeFuncs";

export function addNameSitee() {
  //
}

export function siteIDFunc(params) {
  //
}

// 1youtube

export function getPageInfo(queryvar, idvar) {
  let infovar =
    //
    document.querySelectorAll(queryvar);
  // document.querySelector(queryvar);

  let firstInfo = infovar ? infovar[0] : "";
  let atti = infovar && idvar;

  let fghjkgf = {
    infovar: infovar,
    firstInfo: firstInfo,
    idvar: idvar,
  };

  bearlog.lug("___ getPageInfo BASE ___", fghjkgf);

  firstInfo = atti ? firstInfo.getAttribute(idvar) : firstInfo;

  bearlog.lug("___ getPageInfo ATTR ___", fghjkgf);

  return firstInfo;
}

export function getMediaJSON(asdfewr) {
  const { webLink, webID } = asdfewr && getPageParams(asdfewr);
  const asdjsad = asdfewr && {
    [webLink]: webID,
  };

  return asdjsad;
}

export function paramFin(asdwsd, asdwe) {
  return asdwsd.searchParams.get(asdwe);
}

// 1url 1base
export function getBaseURL(docvar) {
  let sadkjwe =
    //
    getURLDict(docvar);

  let urlMain =
    //
    sadkjwe.host;

  return urlMain;
}

export function getPageParams(docvar) {
  let logtrue = "";

  if (logtrue) {
    bearlog.lugge("getPagParams-initalLink", docvar);
  }
  let dfigjreit =
    //
    docvar;
  // window.location
  // "https://www.youtube.com/watch?v=lJTRVX9R5EA";
  // "https://stackoverflow.com/questions/51568821/works-in-chrome-but-breaks-in-safari-invalid-regular-expression-invalid-group/51568859";

  let sadkjwe =
    //
    getURLDict(dfigjreit);

  let urlMain =
    //
    sadkjwe.host;
  // sadkjwe.hostname;

  const ijsadw = {
    INITAL: docvar,
    ALL_INFO: sadkjwe,
    urlMain: urlMain,
  };

  function asokw(rzds) {
    return paramFin(sadkjwe, rzds);
  }

  let webID = "";
  let webLink = "";
  let startTime = "";

  switch (urlMain) {
    case "localhost":
      webID = asokw("v");
      break;
    // 1youtube
    case "www.youtube.com":
    case "youtu.be":
      webLink = "youtube";

      webID = asokw("v");
      webID = webID ? webID : getFirstArr(sadkjwe.pathArray);

      startTime = asokw("t");
      break;
    case "www.listennotes.com":
      webLink = "listennotes";
      //   webID = listenParams(urlMain);
      break;
    default:
    // code block
  }

  let finalIa = {
    //
    webLink: webLink,
    webID: webID,
    startTime: startTime,
  };

  if (logtrue) {
    bearlog.lugge("___ getPagParams BASIC INFOR ___", ijsadw);
    bearlog.lugge("___ getPagPrams ___", finalIa);
  }

  let endROs = {
    webLink,
    webID,
    startTime,
  };

  return endROs;
}

export function mainFuncs(params) {
  const oksdw = {
    // startTime: getCurrTime(),
    ...getMediaJSON(),
  };

  // openNewTab();
  // openBediaNew(oksdw);

  bearlog.lug("___ logs ___", oksdw);
}

// 1path 1link
export function getPathArray() {
  const cvbokdf = getURLDict();

  return cvbokdf ? cvbokdf["pathArray"] : "";
}

export function getURLDict(dfigjreit = window.location.href) {
  const okdaew =
    //
    "https://";

  const checkhtp = dfigjreit.includes(okdaew);
  dfigjreit = checkhtp ? dfigjreit : okdaew + dfigjreit;

  bearlog.lug("getURLDict--AAA", dfigjreit);

  let sadkjwe =
    //
    new URL(dfigjreit);
  // new URL();

  // let convios = convertObjectDict(sadkjwe);
  let slashio = removeEmptyArray(sadkjwe.pathname.split("/"));

  sadkjwe["pathArray"] = slashio;

  const kasew = {
    sadkjwe: sadkjwe,
    slashio: slashio,
    // convios: convios,
  };

  bearlog.lug("___ getURDict aaa ___", kasew);

  return sadkjwe;
}

export function getTagText(jsdfew) {
  const qasde = jsdfew ? jsdfew.innerText : "";
  return qasde;
}

export function findClassDoc(asdwsd, asdwe) {
  const jsdfew = document.getElementsByClassName(asdwsd)[0];
  // const qasde = jsdfew ? jsdfew.innerText : ""

  return jsdfew;
}

export function insertClassDoc(asdwsd, cvbij) {
  const jsdfew = findClassDoc(asdwsd);

  bearlog.lug("___ insertClassDoc ___", jsdfew);

  if (jsdfew) {
    bearlog.lug("___ insertClassDoc FOUND ___");

    setTimeout(function () {
      bearlog.lug("___ input FOCUS ___");
      jsdfew.focus();
    }, 0);

    bearlog.lug("___ document.execCommand paste ___");
    document.execCommand("paste");

    // CLEAR INPUT
    setto("aria-label", "");

    // ADD INPUT
    setto("value", cvbij);
    setto("data-text", cvbij);

    // jsdfew.innerText = cvbij;
    jsdfew.innerHTML = cvbij;
    jsdfew.replaceChildren(cvbij);
  }

  bearlog.lug("___ insertClassDoc END___", jsdfew);

  //
  //
  function setto(sdfer, VALUE) {
    bearlog.lug(sdfer, "___ setto ___", VALUE);

    jsdfew[sdfer] = VALUE;
    jsdfew.setAttribute(sdfer, VALUE);
  }
}

export function findTagInner(arro, funcvar, attvar) {
  let xcvkds = mapArrFunc(arro, funcvar);
  const dfijer = getTagText(xcvkds);

  bearlog.lug("___ findTagInner ___", { xcvkds, dfijer });

  return dfijer;
  // return jsdfew;
}

export function findClassInner(arro, attvar) {
  return findTagInner(arro, findClassDoc);
}
