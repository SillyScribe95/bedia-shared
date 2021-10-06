import { bearlog } from "..";
import { turnarray } from "./arrayFuncs";

export function sortTrue(list, attr) {
  // list=  sortBasic(list,)
  // function true(){
  // }
}

export function sortBasic(list, functs) {
  list = turnarray(list);
  list = list.sort(functs);

  return list;
}

export function sortNumberBig(list, attr) {
  list = sortBasic(list, sdifmer);

  function sdifmer(c, d) {
    const { a, b } = getAttos(c, d, attr);
    bearlog.log("sortNumberBig", "a, b", a, b);

    return a > b ? -1 : 1;
  }
  //   list = list.sort((a, b) => (a.color > b.color ? 1 : -1));

  return list;
}
export function sortNumberSmall(list, attr) {
  list = sortBasic(list, sdifmer);

  function sdifmer(c, d) {
    const { a, b } = getAttos(c, d, attr);
    bearlog.log("sortNumberSmall", "a, b", a, b);

    return a < b ? -1 : 1;
  }
  //   list = list.sort((a, b) => (a.color > b.color ? 1 : -1));

  return list;
}

export function getAttos(a, b, atoo) {
  a = atoo ? a[atoo] : a;
  b = atoo ? b[atoo] : b;
  return { a, b };
}
