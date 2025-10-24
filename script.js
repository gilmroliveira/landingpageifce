// Scroll suave para seções
function scrollToSection(id){
  const section = document.getElementById(id);
  if(section){
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Lead form handler
document.addEventListener('DOMContentLoaded', function() {
  const leadForm = document.querySelector('.form-lead');
  if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Cadastro realizado! Você receberá novidades do IFCE Tianguá por e-mail.");
      leadForm.reset();
    });
  }
});
