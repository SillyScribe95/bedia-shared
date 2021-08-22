export async function getMediaLink({ link, name }) {
  let extInfo = "";

  const osdker = getExtString(link);

  // bearlog.lug("getExtString", osdker);

  switch (osdker) {
    case "pdf":
      // bearlog.lug("FOUND_PDF", osdker);
      extInfo = await getBookInfo(name);
      break;
    //   default:
    //     // bearlog.lug("FOUND_DEFAULT", osdker);
    //     extInfo = getVidInfo(link);
  }

  return extInfo;
}
