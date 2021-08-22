import * as bearlog from "./logFuncs";

export function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    bearlog.lug("Fallback: Copying text command was " + msg);
  } catch (err) {
    bearlog.lug("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

// 1copy
export function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text).then(
    function () {
      bearlog.lug("Async: Copying to clipbfaunfaaoard was successful!");
    },
    function (err) {
      bearlog.lug("Async: Could not copy text: ", err);
    }
  );
}
