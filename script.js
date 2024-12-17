// URL do cardápio (hospedado no GitHub Pages)
const cardapioURL = "https://github.com/JessicaLPontes/cardapiodigital/blob/main/Card%C3%A1pio%20teste.pdf";

const qrcodeContainer = document.getElementById("qrcode");

// Gera o QR Code
const qrcode = new QRCode(qrcodeContainer, {
  text: cardapioURL,
  width: 128,
  height: 128,
});
