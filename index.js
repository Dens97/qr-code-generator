const inputEl = document.getElementById("input-el");
const generateBtn = document.getElementById("generate-btn");
const qrEl = document.getElementById("qr-el");

generateBtn.addEventListener("click", function () {
  if (inputEl.value) {
    qrEl.innerHTML = "";
    const qrcode = new QRCode(qrEl, inputEl.value);
  }
});
