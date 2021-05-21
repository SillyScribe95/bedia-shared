// import { stringinarray } from "@todcode/components";
// import { without } from "lodash";
// import { indexLikes, indexUser } from "@todcode/components/";

// import AddModelFunc from "../backend/AddModelFunc";
// import { editModel } from "@todcode/components/";
// import { getDocModel } from "@todcode/components/";

// export function addModelUserItem(typevar, objvar, keyvar, uservar) {
//   //

//   let likeList = uservar.likes;
//   let ideoObj = objvar.id;
//   let useIdeo = uservar.id;

//   const baseArgs = {
//     postID: ideoObj,
//     userID: useIdeo,
//   };

//   let isakdawe = {
//     whereDict: baseArgs,
//   };

//   function addDoco(adofker) {
//     let useDoc = objvar.userID;
//     let docType = adofker[keyvar];
//     let userType = docType?.useDoc;

//     // let endDoc = userType ? removeKeyDict(docType, useDoc)

//     if (userType) {
//       delete docType.useDoc;
//     } else {
//       //   docType;
//     }

//     // adofker.set({
//     //   [keyvar]:
//     // })
//   }

//   const okaease = {
//     funcvar: addDoco,
//   };

//   //   getDocModel(typevar, objvar.id, aeawe);

//   // addModel();

//   function checkBefore() {
//     let likeBefore = stringinarray(ideoObj, likeList);

//     return likeBefore;
//   }

//   // 1remove
//   function remGovo() {
//     let newUserList = without(likeList, ideoObj);
//     editModel(indexUser, uservar, "like", newUserList);

//     const sfdew = {
//       ...isakdawe,
//     };

//     // deleteModel(indexLikes, sfdew)
//   }

//   // 1add
//   function addNowo() {
//     //
//     likeList.push(ideoObj);
//     editModel(indexUser, uservar, "like", likeList);
//     AddModelFunc(indexLikes, baseArgs);
//   }

//   let cheitgo =
//     //
//     checkBefore();

//   if (cheitgo) {
//     remGovo();
//   } else {
//     addNowo();
//   }
// }
