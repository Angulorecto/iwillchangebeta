// Function to check if the current window location is about:blank
function isAboutBlank() {
  return window.location.href === "about:blank";
}

// Function to replace the iframe in the current window with the current page's URL
function replaceIframeWithCurrentPage() {
  if (!isAboutBlank()) {
    const iframe = document.createElement("iframe");
    iframe.src = window.location.href; // Set the iframe source to the current page's URL
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    document.body.innerHTML = ''; // Remove existing content
    document.body.appendChild(iframe); // Add the new iframe to the body
  }
}

// Replace the iframe with the current page's URL if not in about:blank
replaceIframeWithCurrentPage();
