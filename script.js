document.addEventListener("DOMContentLoaded", () => {
  const qrcodeContainer = document.getElementById("qrcode");
  const fileInput = document.getElementById("file-input");
  const uploadBtn = document.getElementById("upload-btn");
  const passwordModal = document.getElementById("password-modal");
  const passwordInput = document.getElementById("password-input");
  const confirmPasswordBtn = document.getElementById("confirm-password-btn");
  const closeModal = document.querySelector(".close");
  const cardapioLink = document.getElementById("cardapio-link").querySelector("a");

  const DEFAULT_CARDAPIO = "Cardápio.png"; // Link fixo inicial

  // Função para gerar o QR Code
  const generateQRCode = (link) => {
    qrcodeContainer.innerHTML = ""; // Limpa o QR Code anterior
    new QRCode(qrcodeContainer, {
      text: link,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  };

  // Gera o QR Code inicial
  generateQRCode(DEFAULT_CARDAPIO);

  // Exibe o modal de senha
  uploadBtn.addEventListener("click", () => {
    passwordModal.style.display = "block";
  });

  // Fecha o modal
  closeModal.addEventListener("click", () => {
    passwordModal.style.display = "none";
    passwordInput.value = ""; // Limpa a senha
  });

  // Confirmação da senha
  confirmPasswordBtn.addEventListener("click", () => {
    if (passwordInput.value === "1234") {
      passwordModal.style.display = "none";
      passwordInput.value = "";
      fileInput.click(); // Abre o input de upload
    } else {
      alert("Senha incorreta!");
      passwordInput.value = "";
    }
  });

  // Atualiza o link e QR Code após upload
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const newCardapioURL = URL.createObjectURL(file); // Cria URL local para o arquivo
      cardapioLink.href = newCardapioURL; // Atualiza o link do cardápio
      generateQRCode(newCardapioURL); // Atualiza o QR Code
      alert("Cardápio atualizado com sucesso!");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const qrcodeContainer = document.getElementById("qrcode");
  const fileInput = document.getElementById("file-input");
  const uploadBtn = document.getElementById("upload-btn");
  const passwordModal = document.getElementById("password-modal");
  const passwordInput = document.getElementById("password-input");
  const confirmPasswordBtn = document.getElementById("confirm-password-btn");
  const closeModal = document.querySelector(".close");
  const cardapioLink = document.getElementById("cardapio-link").querySelector("a");

  const DEFAULT_CARDAPIO = "Cardápio.png"; // Link fixo inicial

  // Função para gerar o QR Code
  const generateQRCode = (link) => {
    qrcodeContainer.innerHTML = ""; // Limpa o QR Code anterior
    new QRCode(qrcodeContainer, {
      text: link,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  };

  // Gera o QR Code inicial
  generateQRCode(DEFAULT_CARDAPIO);

  // Exibe o modal de senha
  uploadBtn.addEventListener("click", () => {
    passwordModal.style.display = "block";
  });

  // Fecha o modal
  closeModal.addEventListener("click", () => {
    passwordModal.style.display = "none";
    passwordInput.value = ""; // Limpa a senha
  });

  // Confirmação da senha
  confirmPasswordBtn.addEventListener("click", () => {
    if (passwordInput.value === "1234") {
      passwordModal.style.display = "none";
      passwordInput.value = "";
      fileInput.click(); // Abre o input de upload
    } else {
      alert("Senha incorreta!");
      passwordInput.value = "";
    }
  });

  // Atualiza o link e QR Code após upload
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const newCardapioURL = URL.createObjectURL(file); // Cria URL local para o arquivo
      cardapioLink.href = newCardapioURL; // Atualiza o link do cardápio
      generateQRCode(newCardapioURL); // Atualiza o QR Code
      alert("Cardápio atualizado com sucesso!");
    }
  });
});
