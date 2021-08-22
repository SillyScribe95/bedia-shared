import { mapEmojiFace } from "./emojiFuncs";
import { GetUserObjs } from "./backendFuncs";
import * as bearlog from "./logFuncs";

export function getUserPlaylists(user) {
  const naemiw = GetUserObjs("playlist", user);

  bearlog.lug("___ getUserPlaylists ___", naemiw);

  return naemiw;
}
