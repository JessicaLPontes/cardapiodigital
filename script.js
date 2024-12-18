document.addEventListener('DOMContentLoaded', function() {
  const passwordModal = document.getElementById('password-modal');
  const passwordInput = document.getElementById('password');
  const confirmPasswordBtn = document.getElementById('confirm-password');
  const uploadIcon = document.getElementById('upload-icon');
  const uploadInput = document.getElementById('upload');
  const qrCodeContainer = document.getElementById('qrcode');

  // Link do cardápio inicial
  const cardapioLink = "https://github.com/JessicaLPontes/cardapiodigital/blob/main/Card%C3%A1pio.png?raw=true";

  // Gerar QR Code com o link inicial
  new QRCode(qrCodeContainer, {
    text: cardapioLink,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Exibir o modal de senha quando o ícone de upload for clicado
  uploadIcon.addEventListener('click', function() {
    passwordModal.classList.remove('hidden');
  });

  // Confirmar senha e exibir upload
  confirmPasswordBtn.addEventListener('click', function() {
    if (passwordInput.value === "1234") {
      passwordModal.classList.add('hidden');
      uploadInput.click(); // Abrir campo de upload diretamente após senha correta
    } else {
      alert("Senha incorreta!");
    }
    passwordInput.value = ''; // Limpar senha
  });

  // Atualizar QR Code ao fazer upload
  uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const newCardapioLink = e.target.result;
        qrCodeContainer.innerHTML = ""; // Limpar QR Code anterior
        new QRCode(qrCodeContainer, {
          text: newCardapioLink,
          width: 128,
          height: 128,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      };
      reader.readAsDataURL(file);
    }
  });
});
