// Scroll suave para seções
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Validação e submissão do formulário com feedback
document.addEventListener("DOMContentLoaded", function () {
  const leadForm = document.querySelector(".form-lead");
  const formMessage = document.getElementById("formMessage");

  if (leadForm) {
    leadForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation (HTML5 also validates)
      const nome = leadForm.nome.value.trim();
      const email = leadForm.email.value.trim();

      if (!nome || !email) {
        formMessage.textContent = "Por favor, preencha nome e e-mail corretamente.";
        formMessage.style.color = "red";
        return;
      }

      // Simula envio, limpa e exibe mensagem positiva
      formMessage.textContent = "";
      leadForm.reset();
      formMessage.textContent = "Cadastro realizado! Você receberá novidades do IFCE Tianguá por e-mail.";
      formMessage.style.color = "green";
    });
  }
});
