document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita envio do formulário

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const mensagem = document.getElementById("mensagem");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    mensagem.textContent = "O campo de e-mail não pode ficar em branco.";
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
  } else if (!regexEmail.test(email)) {
    mensagem.textContent = "Por favor, insira um e-mail válido no formato exemplo@dominio.com.";
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
  } else {
    mensagem.textContent = "";
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
    alert("E-mail válido! Formulário enviado.");
    // this.submit(); // Envio real do formulário, se necessário
  }
});
