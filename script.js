// URL do cardápio (hospedado no GitHub Pages)
const cardapioURL = "https://jessicalpontes.github.io/cardap/";

const qrcodeContainer = document.getElementById("qrcode");

// Gera o QR Code
const qrcode = new QRCode(qrcodeContainer, {
  text: cardapioURL,
  width: 128,
  height: 128,
});
