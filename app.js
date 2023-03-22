const formSubmit = document.querySelector('.form-submit');
const titleH2 = document.querySelector('.contact-title h2');
const contactThanks = document.querySelector('.contact-thanks');

// mostra mensagem de agradecimento quando realizar o submit no formulário
formSubmit.onclick = function(){
    titleH2.classList.add('hidden-message');
    contactThanks.classList.remove('hidden-message');
    contactThanks.classList.add('active-message');
}