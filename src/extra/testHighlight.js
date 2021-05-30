import { getEnchancedArray } from "../functions/arrayFuncs";
import { testUser } from "./testUser";
import * as logs from "../functions/logFuncs";
import { testNotData } from "./testNotion";
import { testMedia } from "./testMedia";

export const testHighlight = {
  id: "asdokexxoaksadOAa",
  slugURL: "asokdqwe",
  speakers: ["", ""],
  about: [""],
  emoji: ["funny", "interesting"],
  quote: "It just wasn't too hard to imagine.",
  name: "Paypal's killer feature - simple vs complex",
  tags: ["elon musk"],
  // userID: ""
  userObj: testUser,
  startTime: 221.082391,
  endTime: 223.392842,
  created: 1616411392659,
  comments: [
    {
      userID: "aspdwe",
    },
    {
      userID: "fdgokfdgewr",
    },
  ],
  likes: [
    {
      userID: "aspdwe",
    },
    {
      userID: "fdgokfdgewr",
    },
  ],
  youtube: "afZTrfvB2AQ",
  // videoFileLink: "https://www.youtube.com/watch?v=afZTrfvB2AQ",
  notion: testNotData,
};

function asokde(sdfew, svwe, name) {
  return {
    ...testHighlight,
    name: name,
    startTime: sdfew,
    endTime: svwe,
  };
}

// 1list
export const swedsfew = getEnchancedArray([
  //
  asokde(26, 30, "the basics"),
  asokde(700, 712, "elon's a bitch to peple"),
  asokde(310, 319, "Do another another here"),
  // asokde(),
  // asokde(),
  asokde(7, 17, "whos' knokcing"),
  // testHighlight,
]);

logs.logga("___ swedsfew ___", swedsfew);

export const testHighlightMedia = {
  ...testHighlight,
  media: testMedia,
};
