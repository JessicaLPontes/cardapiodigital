document.addEventListener('DOMContentLoaded', function() {
  const passwordModal = document.getElementById('password-modal');
  const passwordInput = document.getElementById('password');
  const confirmPasswordBtn = document.getElementById('confirm-password');
  const uploadIcon = document.getElementById('upload-icon');
  const uploadInput = document.getElementById('upload');
  const cardapioLink = "https://github.com/JessicaLPontes/cardapiodigital/blob/main/Card%C3%A1pio.png?raw=true"; // Link do cardápio original
  const qrCodeContainer = document.getElementById('qrcode');

  // Gerar QR Code com o link inicial
  new QRCode(qrCodeContainer, {
    text: cardapioLink,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Função para mostrar o modal de senha ao clicar no ícone de upload
  uploadIcon.addEventListener('click', function() {
    passwordModal.classList.remove('hidden');
  });

  // Função para verificar a senha e liberar o campo de upload
  confirmPasswordBtn.addEventListener('click', function() {
    if (passwordInput.value === "1234") {
      passwordModal.classList.add('hidden');
      uploadInput.classList.remove('hidden'); // Mostrar campo de upload após senha correta
    } else {
      alert("Senha incorreta!");
    }
    passwordInput.value = ''; // Limpar campo de senha
  });

  // Ao fazer o upload de uma nova imagem, gerar um novo QR Code
  uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const newCardapioLink = e.target.result;
        new QRCode(qrCodeContainer, {
          text: newCardapioLink,
          width: 128,
          height: 128,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      };
      reader.readAsDataURL(file); // Lê a imagem e converte para URL
    }
  });
});
