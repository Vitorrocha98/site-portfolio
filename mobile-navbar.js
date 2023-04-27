// classe abstrata
class MobileNavbar {
    // cada parametro do construtor é um elemento que sera definido a partir da sua respectiva classe, passada quando o MobileNavbar for utilizado
    constructor(mobileMenu, closeMenu, navList, navLinks) {
        // this.mobileMenu vai guardar o elemento respectivo selecionado no DOM 
        this.mobileMenu = document.querySelector(mobileMenu);
        // this.closeMenu vai guardar o elemento respectivo selecionado no DOM
        this.closeMenu = document.querySelector(closeMenu)
        // this.navList vai guardar o elemento respectivo selecionado no DOM
        this.navList = document.querySelector(navList);
        // this.navLinks vai guardar o elemento respectivo selecionado no DOM
        this.navLinks = document.querySelectorAll(navLinks);
        // this.activeClass vai guardar o valor de "active"
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.closeMenuClick = this.closeMenuClick.bind(this);
    }

    animateLinks() {
        // percorre a lista de links e adicona a animacao em cada um deles 
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s')
        })
    }

    handleClick() {
        // este console mostra o elemento que esta sendo clicado
        //console.log(this);
        // adiciona uma classe de ativo para o elemento navList
        this.navList.classList.toggle(this.activeClass);
        // adiciona uma classe de ativo para o elemento navList
        this.closeMenu.classList.toggle(this.activeClass);
        // adiciona uma classe de ativo para o elemento navList
        this.mobileMenu.classList.toggle(this.activeClass);
        // quando o elemento que chamou o handleClick for clicado, chama tambem a funcao animateLinks()
        this.animateLinks();
    }

    closeMenuClick() {
        // realiza um clique no botao de menu hamburguer para fechar o mesmo
        this.mobileMenu.click();
    }

    // funcao para quando um elemento for clicado
    addClickEvent() {
        // quando o botao de menu hamburguer for clicado, chama a funcao handleClick()
        this.mobileMenu.addEventListener("click", this.handleClick);
        // quando o elemento closeMenu for clicado, chama a funcao closeMenuClick()
        this.closeMenu.addEventListener("click", this.closeMenuClick)
    }

    init() {
        // se o botao de menu hamburguer estiver no documento, chama a funcao addClickEvent()
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// na variavel mobileNavbar  é criada a classe MobileNavbar (linha 2) para ser utilizada, passando os valores do parametro do construtor (linha 4) com as classes dos elementos desejados
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".close-menu",
    ".nav-list",
    ".nav-list li",
);
// chama a funcao init() para iniciar
mobileNavbar.init();