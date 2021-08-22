// import * as bearlog from "./logFuncs";

// var faunadb = require("faunadb"),
//   q = faunadb.query;

// var faunadb = require("faunadb");
// var serverClient = new faunadb.Client({
//   secret: "fnAEIh8pDDACAaB14O6PimK--HVab9Ua9g5C67f9",
// });

// export function renderFauna(typevar, { data, ...asdwe }) {
//   data = {
//     typevar: typevar,
//     ...data,
//   };

//   bearlog.lug("___ renderFauna AAA ___", {
//     DATA: data,
//     OTHER: asdwe,
//   });

//   return data;
// }

// export function addFauna() {}

// export function createFauna(typevar, { id, addArgs }, { funcvar }) {
//   let dsfdas = id ? q.Collection(typevar, id) : q.Collection(typevar);

//   const itemCre = q.Create(q.Ref(dsfdas), { data: addArgs });

//   bearlog.lug("___ createFauna", {
//     serverClient: serverClient,
//     itemCre: itemCre,
//   });

//   serverClient.query(itemCre).then((ret) => funcvar(renderFauna(typevar, ret)));
// }

// export function updateFauna(refvar, { id, addArgs }, { docvar, funcvar }) {
//   //
//   const iasde = q.Update(refvar, { data: addArgs });

//   serverClient.query(iasde).then((ret) => funcvar(renderFauna(typevar, ret)));
// }

// export async function getFauna({ boolvar, boolTrue, ...sdewq }) {
//   let kosade = boolTrue
//     ? boolvar && (await faunBase(sdewq))
//     : await faunBase(sdewq);

//   // let kosade = faunRet(sdewq)
//   // kosade = {
//   //     ...kosade,
//   //     ...kosade?.data
//   // }

//   // bearlog.lug("getFauna--", sdewq)
//   // return ""
//   return serverClient.query(kosade);
//   // return faunBase(sdewq)
// }

// // 1filtmodel
// export async function faunBase({
//   typevar,
//   keyvar,
//   multidocs,
//   // WHERE
//   wherevar = "==",
//   whereDict,
//   valuevar,
//   docvar,
//   //
//   //
//   logtrue,
//   messvar = "",
//   funcvar,
//   boolvar,
//   boolTrue,
//   limitvar,
//   addTrue,
//   orderTrue,
//   orderDateTrue,
//   orderType,
// }) {
//   // 1getfire

//   logtrue =
//     //
//     logtrue;
//   // "";
//   // "asd";

//   function filtDoc(sdfe) {
//     return q.Get(q.Ref(q.Collection(typevar), sdfe));
//   }

//   function quesKey() {
//     const okae = `${typevar}_by_${keyvar}`;

//     let iwqesa = q.Get(q.Match(q.Index(okae), valuevar));
//     // iwqesa = q.Ref(iwqesa)
//     // iwqesa = q.Paginate(iwqesa)
//     // iwqesa = q.Select(["ref"], iwqesa)

//     bearlog.lug("quersKey ", {
//       KEYVAR: okae,
//       VALUEVAR: valuevar,
//       FINAL: iwqesa,
//     });

//     return iwqesa;
//   }

//   function filtWhere(xcasdwv, dfae) {
//     for (const [key, value] of Object.entries(dfae)) {
//       //
//     }

//     return xcasdwv;
//   }

//   const botheo = keyvar && valuevar;

//   let refMod = docvar
//     ? filtDoc(docvar)
//     : multidocs
//     ? multidocs.map(filtDoc)
//     : botheo && quesKey();

//   let sdfgrt =
//     //
//     refMod;
//   //   botheo
//   //     ? refMod.where(keyvar, wherevar, valuevar)
//   //     : whereDict
//   //     ? filtWhere(refMod, whereDict)
//   //     : refMod;

//   // orderType = orderType ? orderType : orderDateTrue ? "createdAt" : "";
//   // orderType,

//   let fdsew0 =
//     //
//     sdfgrt;
//   // ofdg0r;
//   //   orderType ? sdfgrt.orderBy(orderType, "desc") : sdfgrt;

//   let aosdfkew =
//     //
//     fdsew0;
//   // limitvar ? fdsew0.limit(limitvar) : fdsew0;

//   let dsaors = funcvar ? funcvar(aosdfkew) : aosdfkew;

//   const truFind = addTrue && !dsaors;

//   bearlog.lug(messvar + "___ fauna ANY ___", {
//     dsaors: dsaors,
//     addTrue: addTrue,
//     truFind: truFind,
//   });

//   //   if (truFind) {
//   //     let osd = sfdgre.add(whereDict);
//   //     return osd;
//   //   }

//   return dsaors;
// }

// export async function FaunaModel({
//   typeFunc,
//   newID,
//   fetchArgs,
//   docvar,
//   addArgs,
//   funcvar,
//   errorFunc,
//   logtrue,
//   messvar,
// }) {
//   //
//   logtrue =
//     //
//     // "";
//     true;

//   function idjeq(sdokfr, sdpkfew) {
//     if (logtrue) {
//       bearlog.lug(messvar + sdokfr, sdpkfew);
//     }
//   }

//   const osawe =
//     //
//     await getFauna(fetchArgs);

//   const okae = {
//     fetchArgs: fetchArgs,
//     OBJECT: osawe,
//   };
//   idjeq(typevar + "___ FaunMod GET___", fetchArgs);

//   logDOSAW(osawe);

//   function logDOSAW(adsfr) {
//     //

//     // const currotIMte =

//     let sdofer = {
//       ...addArgs,
//       // createdAt: currotIMte,
//       // modifiedAt: currotIMte,
//     };

//     // if (newID) {
//     //   idjeq("_NEW_ID__ FireMdel ___" + newID, osawe);

//     //   getDataBase()(typeFunc)
//     //     .doc(newID)
//     //     .set(addArgs)
//     //     .then(asodkwe)
//     //     .catch(errorFunc);
//     // }

//     switch (typeFunc) {
//       case "delete":
//         idjeq("_DELETE__ FireMdel ___", osawe);

//         // osawe.remove();
//         serverClient.query(q.Delete(adsfr)).then(asodkwe).catch(errorFunc);
//         break;
//       case "update":
//         let sdofer = {
//           ...addArgs,
//           modifiedAt: currotIMte,
//         };

//         idjeq("_UPDATE FireMdel ___", {
//           OBJECT: osawe,
//           updateITEMS: sdofer,
//         });

//         if (docvar) {
//           client
//             .query(q.Update(adsfr, { data: sdofer }))
//             .then(asodkwe)
//             .catch(errorFunc);
//         } else {
//           client
//             .query(q.Create(adsfr, { data: sdofer }))
//             .then(asodkwe)
//             .catch(errorFunc);
//         }
//     }
//   }

//   function asodkwe({ data, ...cbvnt }) {
//     //

//     idjeq("___ FUREBASE ADD DATA aaaaa ___", dataoi);

//     let aoskew = {
//       ...data,
//       ...cbvnt,
//     };

//     let slkdmwe = {
//       WITHARGS: sfdokewe,
//       RAW: dataoi,
//       SNAPSHOT: aoskew,
//     };

//     idjeq("___ FAUNA ADD DATA bbbb ___", slkdmwe);

//     if (funcvar) {
//       funcvar(aoskew);
//     }
//   }

//   // .doc(xocve)
//   // .set(sdijf);
//   return odawe;
// }
