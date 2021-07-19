export function regexReplace(string, regex, replace = "") {
  const jfgse = new RegExp(regex, "g");
  const sdfee = string.replace(jfgse, replace);

  return sdfee;
}
