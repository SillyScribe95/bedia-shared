export function closeExtension(id = "my-extension-root") {
  // logs.loggo("___ CLOSING APP LOGIN___");

  const aaspo = document.getElementById(id);
  aaspo.style.display = "none";

  // window.close();
}
