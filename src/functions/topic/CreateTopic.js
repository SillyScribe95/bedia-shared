import React, {
  //
  useState,
  useContext,
} from "react";
import { logs, moveItemToFront } from "@todcode/components/";

import { MainContext } from "../../contexts/MainContext";
import { AuthContext } from "../../contexts/AuthContext";
import {
  addKnowledge,
  createModel,
  mapGetModel,
  modelCurrTime,
} from "@todcode/components/";
import { indexTopic, indexUser } from "@todcode/components/";
import AddModelFunc from "../../functions/backend/AddModelFunc";
import {
  addModelArray,
  editModel,
  filtModel,
  getDataBase,
} from "@todcode/components/";
import { convertObjectDict } from "@todcode/components/";

export default async function CreateTopic(sdfew, currentUser) {
  //
  //
  function logUser(typoe, sadoke) {
    let idoeUse = sadoke.id;

    let plfrew = currentUser[typoe];
    let toplist =
      //
      plfrew;
    // convertObjectDict(plfrew);
    // toplist.append(plfrew)
    let newList = toplist ? moveItemToFront(plfrew, idoeUse) : [idoeUse];

    // let toppoDat = toplist ? toplist[idoeUse] : "";
    // let toppoBase = toplist ? toplist.idoeUse : "";
    // let counto = toppoDat.count;
    // let updateCount = counto ? counto + 1 : 1;

    // let objNew = {
    //   recent: modelCurrTime(),
    //   count: updateCount,
    // };

    // toplist[idoeUse] = objNew;

    let sawesae = {
      USER: currentUser,
      ATTR: typoe,
      ADDED_OBJECT: sadoke,
      originalTOPICS: toplist,
      finalTOPICS: newList,
      //
      // FOUNDOBJ: toppoDat,
      // USETOPS: plfrew,
      // ID: idoeUse,
      // MAINTOPIC: toppoDat,
      // toppoBase: toppoBase,
      // //
      // COUNT: counto,
      // UPDATE: updateCount,
      // //
      // PARAMS: objNew,
    };

    logs.logga("CREATED TOPIC --- ADDING TO USER ___", sawesae);

    editModel(indexUser, currentUser, indexTopic, newList);
  }

  function saodke(adsofkew) {
    //

    logs.logga("___ CREAT TOPIC AFTER CREAT ___", adsofkew);

    let isajdwe = currentUser && adsofkew;
    if (isajdwe) {
      logUser(indexTopic, adsofkew);
    }
  }

  function actuCreateTop(sdfokr) {
    //
    //

    function saikes() {
      saodke(sdfokr);
    }

    const kjsaew = {
      obj: sdfokr,
      newID: sdfokr.id,
      noNote: true,
      userObj: currentUser,
      userFunc: saodke,
    };

    logs.logga("___CREATING  ___", kjsaew);

    getDataBase()
      .collection(indexTopic)
      .doc(sdfokr.id)
      .set(sdfokr)
      .then(saikes);
    // .catch(errorFunc);

    // AddModelFunc(indexTopic, sdfokr, kjsaew);
  }

  function asokwe(sdfokr) {
    //
    //
    function askwe(asde) {
      logs.logga("___ asde ___", asde);

      if (!asde) {
        actuCreateTop(sdfokr);
      } else {
        saodke(asde);
      }
    }

    async function mapNoHook({ wikiID, ...sdfokr }) {
      const iase = await getDataBase()
        .collection(indexTopic)
        .where("wikiID", "==", wikiID)
        .get();

      const existTure =
        //
        document && document.exists;

      const okddsa = {
        WIKI_ID: wikiID,
        OBJECT: iase,
        existTure: existTure,
      };

      // if () {
      //   await document.ref.update({
      //     updated: new Date().toISOString(),
      //   });
      // }

      logs.logga("___ mapNOHHO ___", okddsa);

      const koasdw = {
        funcvar: askwe,
        singleTrue: true,
      };

      // mapGetModel(iase, koasdw);
    }

    logs.logga("___searckno ADD TOPIC sdfokr ___", sdfokr);

    // mapNoHook(sdfokr);
    actuCreateTop(sdfokr);
  }

  // AddModelFunc(indexTopic, sdfew, {});
  // const {...asdw} = filtModel( )
  // sdfew.map(asokwe);
  sdfew.map(actuCreateTop);
}
