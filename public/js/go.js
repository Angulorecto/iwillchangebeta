document.addEventListener("DOMContentLoaded", function() {
  if (window.location.href !== "about:blank") {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("You're not seeing the site till you enable popups.");
      window.location.href = "https://clever.com";
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");
      const name = "Clever | Portal";
      const icon = "src/photos/clever-logo.png";
      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      // Save the window location URL before opening the popup
      const windowUrl = window.location.href;

      // Use the saved window location URL for the iframe src
      iframe.src = windowUrl;

      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";
      doc.head.appendChild(link);
      doc.body.appendChild(iframe);
      window.close();
    }
  }
});
