import { mapEmojiFace } from "./emojiFuncs";
import { GetUserObjs } from "./backendFuncs";
import * as logs from "./logFuncs";

export function getUserPlaylists(user) {
  const naemiw = GetUserObjs("playlist", user);

  logs.logga("___ getUserPlaylists ___", naemiw);

  return naemiw;
}
