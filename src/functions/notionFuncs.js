import { testHighlight } from "../extra/testHighlight";
import { mapDictAttr } from "./dictFuncs";
import { getHighMetaBasic } from "./highlight/getHighMetaBasic";
import * as bearlog from "./logFuncs";

// function turnDatNote({key, value}){
//     let typNot = typeof value

//     let endType = ""
//     switch (typNot){
//         case "array":
//             endType = {
//                 type: "multi_select",
//                 multi_select: value.map(aosw => {name: aosw})

//     }
//     break;
//     default:
//         endType = {
//             type: "rich_text",
//             rich_text: value
//         }
// }

// function aodkae(sdfr){
//     let elResults = mapDictKey(saokew.properties)
//     let nameBase = title[0].plain_text

//     const ojaser= {
//       name: nameBase,
//       properties: elResults
//     }

//     return ojaser
// }

// function getUser

function getNotionFile(imgsad, type = "link") {
  //
  //
  let daASD = {
    name: imgsad,
  };

  // daASD = imgsad;
  daASD = [daASD];

  const okasew = {
    type: "files",
    files: daASD,
  };

  bearlog.lug("___ getNotionFile ___", okasew);

  return okasew;
}

export function getNotionText(title, typevar = "text") {
  const oasase = [
    {
      text: {
        content: title,
      },
    },
  ];

  const oasde = {
    [typevar]: oasase,
  };

  return oasde;
}

export function getNotionMulti(listvar, typevar = "text") {
  function dsfkerz(cvvsdf) {
    const ijawew = {
      name: cvvsdf,
    };

    return ijawew;
  }

  const sfokwer = {
    type: "multi_select",
    multi_select: listvar.map(dsfkerz),
  };

  return sfokwer;
}

function getNotionHighMeta({ quote, image, tags, emoji, name, ...dasd }) {
  //
  const oksdase = {
    Name: getNotionText(name, "title"),
    Quote: getNotionText(quote, "rich_text"),
    Emoji: getNotionMulti(emoji),
    Tags: getNotionMulti(tags),
    Image: getNotionFile(image),
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

export function adfwaer({ notion, userObj, ...obj }) {
  //

  const baseHigh = getHighMetaBasic(obj);

  bearlog.lug("___  baseHigh ___", baseHigh);

  const notisn = getNotionHighMeta(baseHigh);
  const baseios = getNotionDatbase(notion);
  const sfkjre = {
    ...baseios,
    ...notisn,
  };

  bearlog.lug("___ saveHighNotion ___", sfkjre);

  //   notion.pages.create(notisn);

  return sfkjre;
}

export function saveHighNotion() {
  const asdfsew = adfwaer(testHighlight);
  return asdfsew;
}
