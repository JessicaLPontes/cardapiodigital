// URL do cardápio (hospedado no GitHub Pages)
const cardapioURL = "https://www.canva.com/design/DAGZju8tRh8/F-HR6P_G_bFJgVgIf3YTmg/view?utm_content=DAGZju8tRh8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a759c933c";

const qrcodeContainer = document.getElementById("qrcode");

// Gera o QR Code
const qrcode = new QRCode(qrcodeContainer, {
  text: cardapioURL,
  width: 128,
  height: 128,
});
