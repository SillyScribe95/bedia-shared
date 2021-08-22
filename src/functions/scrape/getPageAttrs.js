import { listenParams } from "../scrapeFuncs";
import * as bearlog from "../logFuncs";
import { getPlayVar } from "./scrapePlayer";

export default function getPageAttrs(docvar) {
  let dfigjreit =
    //
    window.location;
  // "https://www.youtube.com/watch?v=lJTRVX9R5EA";
  // "https://stackoverflow.com/questions/51568821/works-in-chrome-but-breaks-in-safari-invalid-regular-expression-invalid-group/51568859";

  let sadkjwe = new URL(dfigjreit);
  let urlMain = sadkjwe.hostname;

  const ijsadw = {
    sadkjwe: sadkjwe,
    urlMain: urlMain,
  };

  bearlog.lug("___ sadkjwe ___", sadkjwe);
  bearlog.lug("___ paramGet ___", ijsadw);

  let linkID = "";
  let linkType = "";

  switch (urlMain) {
    case "localhost":
      linkID = sadkjwe.searchParams.get("v");
      break;
    case "www.youtube.com":
      linkType = "youtube";
      linkID = sadkjwe.searchParams.get("v");
      break;
    case "www.listennotes.com":
      linkType = "listennotes";
      linkID = listenParams(urlMain);
      break;
    default:
      const sase = getPlayVar();
  }

  let finalIa = {
    //
    linkType: linkType,
    linkID: linkID,
  };
  // window.location.pathname;
  // getRegexURL(urlMain);

  bearlog.lug("___ getPageParams ___", finalIa);

  let endROs = {
    linkType,
    linkID,
  };

  return endROs;
}
