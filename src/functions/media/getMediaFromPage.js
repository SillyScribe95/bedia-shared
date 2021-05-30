export async function getMediaLink({ link, name }) {
  let extInfo = "";

  const osdker = getExtString(link);

  // logs.logga("getExtString", osdker);

  switch (osdker) {
    case "pdf":
      // logs.logga("FOUND_PDF", osdker);
      extInfo = await getBookInfo(name);
      break;
    //   default:
    //     // logs.logga("FOUND_DEFAULT", osdker);
    //     extInfo = getVidInfo(link);
  }

  return extInfo;
}
