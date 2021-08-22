import { getNotionText } from "../notionFuncs";
import * as bearlog from "../logFuncs";

function getNotionHighMeta({ quote, emoji, name }) {
  const oksdase = {
    Name: getNotionText(name, "title"),
    Quote: getNotionText(quote),
    Image: getNotionFile(image, "link"),
    Emoji: getNotionMulti(emoji),
    Tags: getNotionMulti(tags),
  };

  return { properties: oksdase };
}

function getNotionDatbase(notion) {
  const saoijkase = {
    parent: {
      database_id: notion,
    },
  };

  return saoijkase;
}

export function saveHighNotion({ notion, userObj, obj }) {
  //
  const notisn = getNotionHighMeta(getHighMetaBasic(obj));
  const baseios = getNotionDatbase(notion);
  const sfkjre = {
    ...baseios,
    ...notisn,
  };

  bearlog.lug("___ saveHighNotion ___", sfkjre);

  //   notion.pages.create(notisn);

  return sfkjre;
}
