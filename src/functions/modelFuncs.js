// import { ShowNote } from "../../components/GlobalComps";
// import {
//   capitalizeFirstLetter,
//   getDuration,
//   getParamVar,
//   ImageTextList,
//   joinString,
// } from "../../functions/GlobalFunctions";
// import ModelPanel from "../../components/model/ModelPanel";
import { mapSelectEnd } from "./arrayFuncs";
import { getDuration } from "./timeFuncs";
import * as logs from "./logFuncs";
// import AddModelFunc from "./model/AddModelFunc";
import {
  indexComment,
  indexHighlights,
  indexLikes,
  indexPlaylist,
  indexUser,
} from "../consts/constMain";
import { FireModel, getFire } from "./firebaseFuncs";
import { removeEmptyDict } from "./dictFuncs";
import {
  editModel,
  filtMain,
  filtModelin,
  getDataBase,
  saveModel,
} from "./backendFuncs";
import { linkuseNameProvide } from "../consts/constLink";
import { updateFauna, createFauna } from "./faunaFuncs";
// import { addModelUserItem } from "./addModelUserItem";

export function getModelImage(obj) {
  //
  function osawe() {
    let endValue = "";
    switch (obj.webLink) {
      case "youtube":
        endValue =
          //
          "";
        // `https://img.youtube.com/vi/${obj?.webID}/hqdefault.jpg`;
        break;

      default:
        endValue = "";
    }

    return endValue;
  }

  function gtut() {
    const awe =
      //
      obj.youtube && `https://img.youtube.com/vi/${obj.youtube}/hqdefault.jpg`;

    return awe;
  }

  const oaew = obj.thumbnail || obj.imageAttr;

  const slqew = oaew ? oaew : obj.youtube ? gtut() : "";

  // osawe();

  return slqew;
}

export function getDocModel(asod, dsijfer, isdjwe) {
  let sjsfd = {
    docvar: dsijfer,
    boolTrue: true,
    boolvar: dsijfer,
    ...isdjwe,
  };

  return filtMain(asod, sjsfd);
}

export function getModelMulti(asod, dsijfer, isdjwe) {
  let sjsfd = {
    multidocs: dsijfer,
    boolTrue: true,
    boolvar: dsijfer,
    ...isdjwe,
  };

  return filtMain(asod, sjsfd);
}

export function editModelArray(...asse) {
  const lkds = { attrType: "array" };

  return editModel(...asse, lkds);
}

export function addModelAttrIfNot(...asse) {
  const lkds = { notPresent: "t" };

  return editModel(...asse, lkds);
}

export function addModelArray(typevar, idvar, keyvar, valuevar) {
  //
  const aeawe = {
    keyvar: keyvar,
    valuevar: valuevar,
    attrType: "array",
  };

  // return editModel(...asse, lkds);
  // editBase(typevar, idvar, aeawe);
}

export function addModelDict(typevar, idvar, keyvar, valuevar) {
  //
  function addDoco(adofker) {
    let docType = adofker[keyvar];
    let userType;
  }

  const okaease = {
    funcvar: addDoco,
  };

  // getDocModel(typevar, idvar.id, aeawe);
}

export function likeModel(sadfew, ewqrwsf, fsade) {
  addModelUserItem(sadfew, ewqrwsf, indexLikes, fsade);
}

export function commentModel(sadfew, ewqrwsf, fsade) {
  addModelArray(sadfew, ewqrwsf, indexComment, fsade);
}

function getModelAtt(typevar, attr) {
  //
  function awsawe(sdfre) {
    let ijade = {
      title: typevar,
      ...sdfre,
    };

    return ijade;
  }

  let asae = {
    [indexHighlights]: awsawe({
      //
    }),
    [indexPlaylist]: awsawe({
      //
    }),
  };

  let oaksdw = asae[typevar];

  return attr ? oaksdw[attr] : oaksdw;
}

// function addNewPlaylist(listosa){

// }

// 1function
function ModelNote(typeofunc, { typevar, ...asdokwe }) {
  logs.logga("___ altmodel notification AAAA ___", asdokwe);

  const kmbfdf = {
    typevar: typevar,
    ...asdokwe,
  };

  const oksawe =
    //
    "";
  // <ModelPanel {...kmbfdf} />;

  ShowNote(oksawe);
}

export function getModelMeta(obj) {
  const iasae = getParamVar(linkuseNameProvide);
  const emojBaseo = joinString(obj?.emoji);

  let titlBase =
    //
    iasae ? iasae : obj?.name;

  const metaBase =
    //
    emojBaseo;
  // `The fastest, easiest way ${fastestvar}`;

  // cont oksadw

  const kmbfdf = {
    titlevar: titlBase,
    meta: metaBase,
  };

  return kmbfdf;
}

export async function getDoc(dfkgd, sodkfa) {
  const okssae =
    //
    "";
  // await getDataBase().collections(dfkgd).doc(sodkfa);

  return okssae;
}

// 1delete
export function deleteModel(tpyoe, listvar, funcvar) {
  let dsfier = listvar.id;
  let fifjer =
    //
    tpyoe;

  const iesaew = {
    typevar: fifjer,
    docvar: dsfier,
  };

  logs.logga(tpyoe + "___ deleoModel ___", listvar);

  let noNote = "";
  //   { noNote, funcvar }
  function waerwsdf() {
    if (!noNote) {
      const okawe = "Deleted: " + listvar.name;

      ShowNote(okawe);
    }

    if (funcvar) {
      funcvar(listvar);
    }
  }

  let okade = getFire(iesaew);

  const okaewq = {
    fetchArgs: iesaew,
    OBJECT: okade,
  };

  logs.logga("___ DELETE OBJECT ___", okaewq);

  okade.delete().then(waerwsdf);
  // .catch(error);
}

export function getObjDuration(obj) {
  let asode = obj.startTime;
  let oakae = obj.endTime;

  let isade = getDuration(asode, oakae);

  return isade;
}

export function ModelCatch(adkwe) {
  const asoekw =
    //
    adkwe.id || adkwe.googleID || adkwe.wikiID;

  logs.logga("___ ModelCatch ___", {
    OBJ: adkwe,
    TRUE: asoekw,
  });

  return asoekw;
}

export function addKnowledge(...sawe) {
  // AddModelFunc(...sawe);
}

// 1time

export async function modelSubmit(
  typeos,
  ijdsfe,
  { currentUser, checkUser, ...saewe }
) {
  // saveUserTopic(topic);

  const oksad = ijdsfe.id;

  let sidjwe = currentUser?.id;

  ijdsfe = removeEmptyDict({
    userID: sidjwe,
    ...ijdsfe,
  });

  const sdfijerq = {
    docvar: oksad,
    typevar: typeos,
    addArgs: ijdsfe,
    ...saewe,
  };

  logs.logga("___ AlrModel fitsUBMIT bbbb___", sdfijerq);



let oaksd = ""
switch (typeos){
  case indexHighlights:
    oaksd = await saveHighlight(sdfijerq);
  // case indexPlaylist:
  //   oaksd = await saveHighlight(sdfijerq);
  // case indexHighlights:
  //   oaksd = await saveHighlight(sdfijerq);
    
  default:
    oaksd = await FireModel(sdfijerq);
}
  
  // let oaksd = oksad
  //   ? await updateFauna(typeos, ijdsfe, saewe)
  //   : await createFauna(typeos, ijdsfe, saewe);

  return oaksd;
}
