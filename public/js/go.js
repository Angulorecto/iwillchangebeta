// Function to check if the current window location is about:blank
function isAboutBlank() {
  return window.location.href === "about:blank";
}

// Function to replace the iframe in the current window with the current page's URL
function replaceIframeWithCurrentPage() {
  if (!isAboutBlank()) {
    var loc = window.location.href;
    var win = window.location.href = "about:blank";
    let iframe = win.document.createElement("iframe");
    iframe.src = loc;
    iframe.style.top = "0px";
    iframe.style.left = "0px";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
  }
}

// Replace the iframe with the current page's URL if not in about:blank
document.addEventListener("DOMContentLoaded", function() {
  replaceIframeWithCurrentPage();
});
