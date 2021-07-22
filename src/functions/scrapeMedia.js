import { getPageInfo } from "./scrapeFuncs";
import * as logs from "../functions/logFuncs";

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
