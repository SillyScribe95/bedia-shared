/*global chrome*/

export function getLocalChrome(item, funcvar) {
  chrome.storage.local.get("CNumber", function (data) {
    console.log(data.CNumber);
    // fill('cardNumber', data.CNumber);
  });
}

export function fillInput(elementId, value) {
  let element = document.getElementById(elementId);
  console.log(element);
  if (element != null) {
    element.focus();
    element.value = assignment;
    console.log("successfully filled");
    element.blur();
  }
}
