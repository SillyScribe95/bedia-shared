import { getModelImage } from "../modelFuncs";
import { emojiNameString } from "../emojiFuncs";
import { getHighlightName } from "../highlightFuncs";
import { quoteSurround } from "../stringFuncs";

export function getHighMetaBasic(obj) {
  // 1name
  obj["name"] = getHighlightName(obj);

  //  1emoji
  obj["image"] = getModelImage(obj);

  const dsofer = getInners(obj);

  return dsofer;
}
export function getInners({ quote, ...extra }) {
  // 1name

  // 1quote
  const kaseweo =
    //
    // quote;
    quoteSurround(quote);

  const okafdrese = {
    quote: kaseweo,
    ...extra,
  };

  return okafdrese;
}
