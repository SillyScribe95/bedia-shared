// import { isEmpty } from "lodash";
// import { logs, FireModel, FaunaModel } from "@todcode/components/";
// import { removeEmptyDict, turnarray } from "@todcode/components/";

// export default async function AddModelFunc(
//   typevar,
//   listvar,
//   { userFunc, userObj, funcvar, fetchArgs }
// ) {
//   const dnsrew = {
//     ...fetchArgs,
//     // funcvar: funcvar,
//     // docvar: listios,
//   };

//   logs.logga(typevar + "___adModel___ AAA", dnsrew);

//   async function roase({ id, userID, wikiID, googleID, ...itemOjb }) {
//     //
//     //

//     let checkEmp = isEmpty(itemOjb);

//     const ijsadw = {
//       itemOjb: itemOjb,
//       EMPTY: checkEmp,
//     };

//     logs.logga("___ AddModFunc ITEM AAAA___", ijsadw);

//     let saokew = removeEmptyDict({
//       id: id,
//       wikiID: wikiID,
//       googleID: googleID,
//     });

//     let okasdew =
//       saokew &&
//       {
//         // whereDict: saokew,
//         // keyvar: "wikiID",
//         // valuevar: wikiID,
//       };

//     const okdsfe = {
//       typevar: typevar,
//       docvar: id,
//     };

//     const retuydf = removeEmptyDict({
//       logtrue: true,
//       messvar: "AddModFunc",
//       ...okdsfe,
//       ...okasdew,
//       ...saokew,
//       ...dnsrew,
//     });

//     const sdfokewr =
//       //
//       !checkEmp &&
//       removeEmptyDict({
//         userID: userID,
//         ...saokew,
//         ...itemOjb,
//       });

//     function catchErr(defda) {
//       logs.logga("___ FUREBASE ADD FAILURE ___", defda);

//       // if (errorFunc) {
//       //   // errorFuncdefda
//       // }
//     }

//     function asweq(afmewrew) {
//       //

//       let sadkoe = userFunc && userObj;

//       let okasew = {
//         ITEM: afmewrew,
//         funcvar: funcvar,
//         userFunc: userFunc,
//         userObj: userObj,
//       };

//       logs.logga("___ ADD MODEL FUNC ADDED___", okasew);

//       if (sadkoe) {
//         userFunc(afmewrew);
//       }

//       if (funcvar) {
//         funcvar(afmewrew);
//       }
//     }

//     const ijdsferw = {
//       ...okdsfe,
//       typeFunc: "update",
//       fetchArgs: retuydf,
//       addArgs: sdfokewr,
//       funcvar: asweq,
//       errorFunc: catchErr,
//     };

//     logs.logga("___ adModel BBBB ___", ijdsferw);

//     // return await FaunaModel(ijdsferw);
//     return await FireModel(ijdsferw);
//   }

//   // let endioa =
//   return await roase(listvar);
// }
