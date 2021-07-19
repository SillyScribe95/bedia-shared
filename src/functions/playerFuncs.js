import { getPageInfo } from "./scrapeFuncs";
import { getPlayVar } from "./scrape/scrapePlayer";
import * as logs from "./logFuncs";

export function getWebCurrentTime(player) {
  let playRo = getPlayVar();
  let timeos = playRo && playRo.currentTime;

  logs.logga("___ getWbCurrentTime ___", {
    playRo: playRo,
    TIME: timeos,
  });

  return timeos;
}

export function changeWebPlayerTime(timeo, playRef) {
  let playRo = playRef ? playRef : getPlayVar();
  let endTimeo = getWebCurrentTime() + timeo;

  logs.logga("___ chanWebPlayerTime ___", {
    playRo: playRo,
    TIME: endTimeo,
  });

  // baseBef();
  addPlay(playRo, endTimeo);
}

export function checkPlaying(playRef) {
  let pausTrue = playRef && playRef.paused;
  return !pausTrue;
}

export function playPauseMedia(media, funco) {
  if (media) {
    if (media.paused) {
      // play.setAttribute('data-icon','u');
      media.play();
      funco(true);
    } else {
      media.pause();
      funco(false);
    }
  }
}

export function pauseMain(playRef, startPla) {
  if (playRef) {
    playRef.pause();
  }
}

// const setPlayTime(){

// }

// 1play
export function playMain(playRef, startPla) {
  if (playRef) {
    let dfkse =
      //
      "";
    // checkPlaying(playRef)

    if (dfkse) {
      playRef.pause();
    } else {
      if (startPla) {
        playRef.currentTime = startPla;
      }
      playRef.play();
    }
  }
}

export function addPlay(playRef, timeo) {
  if (playRef) {
    let currTime = playRef.currentTime;
    let finalTime = currTime + timeo;

    playMain(playRef, finalTime);
  }
}
