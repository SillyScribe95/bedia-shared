import { getPageInfo } from "..//scrapeFuncs";
import * as bearlog from "../logFuncs";

export function getCurrTime(player) {
  // if
  let playRo = getPlayVar();
  let endTime = playRo && playRo.currentTime;

  let sdifkjer = {
    playRo: playRo,
    endTime: endTime,
  };

  bearlog.lug("___ getCurrTime ___", sdifkjer);

  return endTime;
}

export function checkPlaying(playRef) {
  let pausTrue = playRef && playRef.paused;
  return !pausTrue;
}

export function getPlayVar(player) {
  const vidFinno =
    //
    // ".video-stream"
    "video[src]";

  let audFinno =
    //
    "audio[src]";

  let vidVarro =
    //
    getPageInfo(vidFinno);

  let vidExists = vidVarro;
  let endVarro = vidVarro ? vidVarro : getPageInfo(audFinno);

  let sdifkjer = {
    vidVarro: vidVarro,
    // endTime: endTime,
  };

  bearlog.lug("___ getPlayVar ___", sdifkjer);

  // const audioTrue

  return endVarro;
}

// export function mainFuncs(params) {
//   const oksdw = {
//     startTime: getCurrTime(),
//     ...getMediaJSON(),
//   };

//   // openNewTab();
//   //   openBediaNew(oksdw);

//   bearlog.lug("___ logs ___", oksdw);
// }
