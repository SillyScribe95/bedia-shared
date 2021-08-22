export function appDarkFunc(opac) {
  // opac = opac ? opac : "1";
  opac = "1";
  // return mainDarkBlueCol;
  return addOpacity(mainDarkBlueCol, opac);
}

export function addOpacity(colorVar, opac) {
  opac = opac ? opac : "1";
  opac = "rgb(" + colorVar + ", " + opac + ")";

  // bearlog.lug("xxx-opac", opac, "sdsi3");

  return opac;
}

export const appMainBodDark = "#d9d9d9";
export const mainSelectBack =
  //
  // "red";
  // "0,22,77";
  appMainBodDark;

export const appMainSelect = {
  // background: appMainBodDark,
};

export const mainDarkBlueCol =
  //
  // "#00164d"
  "0,22,77";

export const appMainColDark = "white";
export const appMainDark = appDarkFunc();
export const appDarkCol = "0,22,77, 1";
export const mainLightBlueCol = "105,129,255";
export const mainLightWhiteCol = "105,129,255";
export function appMainLight(opac) {
  opac = opac ? opac : "1";
  return addOpacity(mainLightBlueCol, opac);
}
export const bediaCircle = {
  background: appMainDark,
  borderRadius: "50%",
};
export const appLightGrey = "rgb(105,129,255, 1)";
export const blueBorder = {
  border: "2px solid " + mainLightBlueCol,
  // borderRadius: "15px",
};

// export const appMainBody = "red";
export const appMainBody =
  //

  // "red";
  // "white";
  "#F3F3F3";

export const fullScreen = {
  position: "absolute",
  top: 0,
  height: "100vh",
  width: "100vw",
};

export const fixedPos = {
  position: "fixed",
};

export const fullFix = {
  ...fullScreen,
  ...fixedPos,
};

// 1bedia 1style bediastyle stylebedia
export const bediaMainStyle = {
  background: appMainDark,
  color: appMainColDark,
  // fontFamily: "Times New",
  // padding: "10px 20px",
  // fontSize: "20px",
  ...blueBorder,
};

export const appLightBack =
  //
  "#EEEEEE";

// 1style CONST
export const fixCenter = {
  position: "absolute",
  top: 0,
  height: "100vh",
  width: "100vw",
};

// borderHover
const xclmvsd =
  //
  "borderHover";
// "borderHover shadowHover";
// "shadowHover";
// "borderMain";

export const butClass = xclmvsd;
export const butClassHover = xclmvsd;
export const buttonMain = "buttonHover shadowHover";
