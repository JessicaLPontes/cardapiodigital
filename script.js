// Elementos do DOM
const qrCodeContainer = document.getElementById("qrcode");
const uploadInput = document.getElementById("upload");
const uploadIcon = document.getElementById("upload-icon");
const passwordModal = document.getElementById("password-modal");
const passwordInput = document.getElementById("password");
const confirmPasswordButton = document.getElementById("confirm-password");
const cardapioLink = document.getElementById("cardapio-link");

// Link padrão do cardápio
const defaultCardapioLink = "https://github.com/JessicaLPontes/cardapiodigital/blob/main/Card%C3%A1pio.png?raw=true";

// Função para gerar QR Code
function generateQRCode(link) {
  qrCodeContainer.innerHTML = ""; // Limpar QR Code anterior
  new QRCode(qrCodeContainer, {
    text: link,
    width: 150,
    height: 150,
    colorDark: "#ffffff",
    colorLight: "#007BFF", // Azul claro para combinar com o tema
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Gerar QR Code inicial com o link padrão
generateQRCode(defaultCardapioLink);

// Exibir modal para senha ao clicar no ícone
uploadIcon.addEventListener("click", () => {
  passwordInput.value = ""; // Limpar senha antes de exibir o modal
  passwordModal.classList.remove("hidden");
});

// Verificar senha e habilitar upload
confirmPasswordButton.addEventListener("click", () => {
  const password = passwordInput.value;
  if (password === "1234") {
    passwordModal.classList.add("hidden");
    passwordInput.value = ""; // Limpar senha após confirmação
    uploadInput.click(); // Abrir seletor de arquivos diretamente
  } else {
    alert("Senha incorreta! Tente novamente.");
    passwordInput.value = ""; // Limpar senha em caso de erro
  }
});

// Atualizar QR Code automaticamente ao fazer upload de uma nova imagem
uploadInput.addEventListener("change", () => {
  const file = uploadInput.files[0];
  if (!file) {
    alert("Por favor, envie um arquivo válido!");
    return;
  }

  // Gerar URL para o arquivo enviado
  const fileURL = URL.createObjectURL(file);
  cardapioLink.href = fileURL;
  cardapioLink.textContent = "👉 Ver Novo Cardápio 👈"; // Alterar texto do link
  generateQRCode(fileURL); // Gerar QR Code com o link do arquivo
});
