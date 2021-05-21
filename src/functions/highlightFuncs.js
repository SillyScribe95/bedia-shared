import { mapEmojiFace } from "./emojiFuncs";

export function getHighlightName({ name, emoji, ...asa }) {
  const iewase =
    //
    // getEMoj(emoji)
    mapEmojiFace(emoji);

  let naemiw = iewase ? `${iewase}    ${name}` : name;

  return naemiw;
}
