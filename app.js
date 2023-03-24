const formSubmit = document.querySelector('.form-submit');
const titleH2 = document.querySelector('.contact-title h2');
const contactThanks = document.querySelector('.contact-thanks');

// mostra mensagem de agradecimento quando realizar o submit no formulário
formSubmit.onclick = function(){
    titleH2.classList.add('hidden-message');
    contactThanks.classList.remove('hidden-message');
    contactThanks.classList.add('active-message');
}

//========================================= Animação do banner

if("IntersectionObserver" in window) {
    let handleIntersection = (entries, observer) => {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                let item = entry.target;
                if(item.id == "banner-principal"){
                    //console.log("======== VISUALIZOU BANNER ========")
                    document.querySelector('#banner-principal .titulo-apresentacao').classList.add('active-banner');
                }
                else if(item.id == "experience-target"){
                    //console.log("VISUALIZOU EXPERIENCIA")
                    document.querySelector('#banner-principal .titulo-apresentacao').classList.remove('active-banner');
                }
            }
        })
    }

    let config = {threshold:0.5};

    let observer = new IntersectionObserver(handleIntersection, config);

    let itensObservados = [].slice.call(document.querySelectorAll('#banner-principal, #experience-target'));
    itensObservados.forEach(item => observer.observe(item));
}

//=========================================