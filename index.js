const inputEl = document.getElementById("input-el");
const generateBtn = document.getElementById("generate-btn");
const qrEl = document.getElementById("qr-el");
const currentBtn = document.getElementById("current-btn");

generateBtn.addEventListener("click", function () {
  if (inputEl.value) {
    generateQR(inputEl.value);
  }
});

currentBtn.addEventListener("click", function () {
  //trigger QR Code Function but input custom tab instead of input val
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(typeof tabs[0].url);
    generateQR(tabs[0].url);
  });
});

function generateQR(url) {
  qrEl.innerHTML = "";
  new QRCode(qrEl, url);
}
