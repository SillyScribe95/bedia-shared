// import { getRegexURL } from "./globalFunc";
import * as logs from "../functions/logFuncs";
import { getFirstArr, removeEmptyArray } from "./arrayFuncs";

// import { getCurrTime } from "./playerFuncs";
// import { openBediaNew } from "./chromeFuncs";

export function addNameSitee() {
  //
}

export function siteIDFunc(params) {
  //
}

// 1youtube
export function youtubeParams(urllo) {
  // const sdijew = https://www.listennotes.com/podcasts/indie-hackers/run-with-it-courtland-allen-6eZ3jTMdv9y/
}

// 1listennotes
export function listenParams(urllo) {
  let getUUID = getPageInfo("div[data-episode-uuid]", "data-episode-uuid");
  // let final;

  const gfhjdfg = {
    getUUID: getUUID,
  };

  logs.logga("___ listenParams ___", gfhjdfg);

  let finio =
    //
    getUUID;

  return finio;
}

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

  logs.logga("___ getPageInfo BASE ___", fghjkgf);

  firstInfo = atti ? firstInfo.getAttribute(idvar) : firstInfo;

  logs.logga("___ getPageInfo ATTR ___", fghjkgf);

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

// export function getURLExpan

export function getPageParams(docvar) {
  let logtrue = "";

  if (logtrue) {
    logs.logge("getPagParams-initalLink", docvar);
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
    logs.logge("___ getPagParams BASIC INFOR ___", ijsadw);
    logs.logge("___ getPagPrams ___", finalIa);
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

  logs.logga("___ logs ___", oksdw);
}

export function getURLDict(dfigjreit) {
  const okdaew =
    //
    "https://";

  const checkhtp = dfigjreit.includes(okdaew);
  dfigjreit = checkhtp ? dfigjreit : okdaew + dfigjreit;

  logs.logga("getURLDict--AAA", dfigjreit);

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

  logs.logga("___ getURDict aaa ___", kasew);

  return sadkjwe;
}
