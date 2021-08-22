export function closeExtension(id = "my-extension-root") {
  // bearlog.lug("___ CLOSING APP LOGIN___");

  const aaspo = document.getElementById(id);
  aaspo.style.display = "none";

  // window.close();
}

export function getLocalExtension(item, funcvar) {
  chrome.storage.local.get("CNumber", function (data) {
    console.log(data.CNumber);
    // fill('cardNumber', data.CNumber);
  });
}

export function setLocalExtension(item, funcvar) {
  chrome.storage.local.get("CNumber", function (data) {
    console.log(data.CNumber);
    // fill('cardNumber', data.CNumber);
  });
}
