import { getType } from "./globalFuncs";
import * as bearlog from "./logFuncs";
import { joinString } from "./stringFuncs";
// import { checkType } from "./globalFuncs";

export function openNewTab(linko) {
  window.open(linko, "_blank");
  // var window = window.open(url, windowN ame, [windowFeatures]);

  // .focus();
}

export function getLinkParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  for (const [key, value] of Object.entries(params)) {
    if (!value) {
      params[key] = true;
    }
  }

  return params;
}

export function turnDictLink(asd, sbdfsg = {}) {
  // bearlog.lug("turnDctLik---", ...asd);

  return asdfker(asd, sbdfsg);
}

export function asdfker(
  fdsger,
  {
    //
    joinArray = ",",
    extra = "&",
  }
) {
  let baseList = [];
  for (var key in fdsger) {
    let basei = fdsger[key];

    if (basei) {
      let endio;
      switch (getType(basei)) {
        case "boolean":
          endio = "";
          break;
        case "array":
          endio = codeit(joinString(basei, joinArray));
          break;
        default:
          endio = codeit(basei);
      }

      function codeit(sdfwr) {
        return "=" + encodeURIComponent(sdfwr);
      }

      bearlog.lug("JOINSTING--", { key, basei, endio });

      endio = key + endio;
      baseList.push(endio);
    }
  }

  // extra = extra
  let enJoino = "?" + baseList.join(extra);

  return enJoino;
}

export function buildLink(link, ...okeas) {
  bearlog.lug("buildnk---", { link, okeas });
  const nsidfjw = link + turnDictLink(...okeas);

  return nsidfjw;
}

export function setParamVar(paramVar, stringVar, linkMain) {
  // const linkvar = paramLink(linkMain);
  // let url = new URL("https://example.com?foo=1&bar=2");
  let linkvar = new URLSearchParams(document.location.search);

  const ijsdaw = {
    stringVar: stringVar,
    linkvar: linkvar,
    paramVar: paramVar,
  };
  bearlog.lug("setParamVar:---", ijsdaw);

  // const params = new URLSearchParams(location.search);
  // params.set('version', 2.0);

  // URL: https://example.com?version=2.0

  linkvar.set(paramVar, stringVar);
  window.history.replaceState(
    {},
    "",
    `${document.location.pathname}?${linkvar}`
  );

  // return checkIt;
}

export function paramLink(linkvar) {
  // const docURL = document.URL;
  const docURL = document.location;

  linkvar = linkvar ? linkvar : docURL;

  const urlFind = new URL(linkvar);
  const linkMatch = new URLSearchParams(urlFind.search);

  // linkMatch = linkMatch ? linkMatch.toString() : "nomatch";

  return linkMatch;
}

export function getParamVar(stringVar, linkMain) {
  const linkvar = paramLink(linkMain);
  const checkIt = linkvar ? linkvar.get(stringVar) : "";

  const ijaeweq = {
    linkvar: linkvar,
    stringVar: stringVar,
    checkIt: checkIt,
  };

  bearlog.lug("___ getParamVar ___", ijaeweq);

  return checkIt;
}

// 1array

// 1mapdict

// for (const [key, value] of turnDict(test)) {
//   bearlog.lug(key, value);
// }

export function modelLink(typevar, sadowqke, typeslu) {
  let ijsawe = {
    user: "u",
  };

  const okdsre = ijsawe[typevar];
  typevar = okdsre ? okdsre : typevar;

  let sadowe = sadowqke && sadowqke.id;
  const ksaew = typeslu ? `/${typeslu}` : "";
  let osakde = `/${typevar}/${sadowe}${ksaew}`;

  return osakde;
}

export function playlistLink(playlisobj, sadowqke, typeslu) {
  let osakde = "profile/playlists";
  return osakde;
}

export function baseLink(typeo, sadowqke, typeslu) {
  let osakde = "/" + typeo;
  return osakde;
}

export function parseQueryStringToDictionary(queryString) {
  var dictionary = {};
  queryString = document.location.search;

  bearlog.lug("___ queryString ___", queryString);

  // remove the '?' from the beginning of the
  // if it exists
  if (queryString.indexOf("?") === 0) {
    queryString = queryString.substr(1);
  }

  // Step 1: separate out each key/value pair
  var parts = queryString.split("&");

  bearlog.lug("___ queryString BBBB___", queryString);
  bearlog.lug("___ parts ___", parts);

  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];
    // Step 2: Split Key/Value pair
    var keyValuePair = p.split("=");

    // Step 3: Add Key/Value pair to Dictionary object
    var key = keyValuePair[0];
    var value = keyValuePair[1];

    // decode URI encoded string
    value = decodeURIComponent(value);
    value = value.replace(/\+/g, " ");

    dictionary[key] = value;
  }

  // Step 4: Return Dictionary Object
  return dictionary;
}

// 1blank 1outside
export function getBlankLink(sadowqke, fdoksawe) {
  let osakde = {
    linkvar: sadowqke,
    linkConfig: {
      outsideTrue: true,
      ...fdoksawe,
    },
  };
  return osakde;
}

export function outsideLink(linkvar) {
  const osakde = {
    linkvar: linkvar,
    linkConfig: {
      outsideTrue: true,
    },
  };

  return osakde;
}

// 1bedia

export function bediaMainLink(adsokfwer = "") {
  let okasew = "http://bedia.tv/" + adsokfwer;

  return okasew;
}
// export function name(params) {
//   const ytdl = require("ytdl-core");

//   const { fetchMetaData } = require("meta-fetcher");
//   // var Meta = require("html-metadata-parser");
//   // var scrape = require("html-metadata");
//   var urlMetadata = require("url-metadata");
//   const ogs = require("open-graph-scraper-lite");
//   // urlMetadata('http://bit.ly/2ePIrDy').then(
//   //   function (metadata) { // success handler
//   //     console.log(metadata)
//   //   },
//   //   function (error) { // failure handler
//   //     console.log(error)
//   //   })

//   const metascraper = require("metascraper");
//   // ([
//   //   //rules that are to be used. you must install these in order to use them.
//   //   require("metascraper-author")(),
//   //   require("metascraper-date")(),
//   //   require("metascraper-description")(),
//   //   require("metascraper-publisher")(),
//   //   require("metascraper-title")(),
//   //   require("metascraper-url")(),
//   // ]);

//   const got =
//     //
//     "";
//   // require("got");
//   //my urls to be scraped for data

//   let okdswqe =
//     //
//     // "aqz-KE-bpKQ";
//     // "http://blog.woorank.com/2013/04/dublin-core-metadata-for-seo-and-usability/";
//     "https://www.youtube.com/watch?v=jm0aYVYJrfQ";
//   // "jm0aYVYJrfQ";

//   const { getMetadata } = require("page-metadata-parser");
//   // const domino = require("domino");

//   const url = "https://github.com/mozilla/page-metadata-parser";

//   async function funcois() {
//     // const { body: html, url } = await got(okdswqe);

//     // const response = await fetch(url);
//     // const html = await response.text();
//     // const doc = domino.createWindow(html).document;
//     // return getMetadata(doc, url);
//     // return await ogs({ url: okdswqe });
//     // return await metascraper(okdswqe);
//     // return await urlMetadata(okdswqe);
//     // return await ytdl.getBasicInfo(okdswqe);
//     // return await Meta.parser(okdswqe);
//     return await fetchMetaData(okdswqe);
//     // return await scrape(okdswqe);
//   }

//   let oksadew =
//     //
//     "https://swapi.dev/api/people/";
//   // "https://swapi.dev/api/people/?page=2";
// }
