import { removeEmptyDict } from "../dictFuncs";
import AddModelFunc from "./AddModelFunc";

// // 1function
export async function createModel(
  typeos,
  listvar,
  { funcvar, noNote, userFunc, userObj }
) {
  //

  function ijdeas(xvcbg) {
    bearlog.lug(typeos + "___ createModel FUNCTION ___", {
      TPYVAR: typeos,
      OBJ: xvcbg,
      funcvar: funcvar,
    });

    if (userFunc && userObj) {
      userFunc(xvcbg);
    }

    if (funcvar) {
      funcvar(asdjew);
    }
  }

  listvar = removeEmptyDict(listvar);

  const okaew = {
    docvar: listvar.id,
    funcvar: ijdeas,
  };

  return await createFauna(typeos, listvar, okaew);
}
