/*================ MOSTRAR MENU =================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
/* abrir */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* fechar */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*========= CLICAR LINK REMOVE MENU ==========*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/*======== TROCAR BACKGROUND NAVBAR SCROL ==============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*========================  MOSTRAR SCROOL-UP =============================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) 
        scrollUp.classList.add('show-scroll')
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);



/*========================  SCROLL REVEAL ANIMATION =============================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`, {delay: 600})
sr.reveal(`.home__img`, {delay: 900, origin: 'bottom'})

sr.reveal(`.founder__article`, {origin: 'left', interval: 100})
sr.reveal(`.founders__text`, {origin: 'right'})
sr.reveal(`.footer, .carroussel`, {origin: 'bottom'})
sr.reveal(`.footer__logo, .footer__content, footer__copyright`, {origin: 'top', interval: 100})


/*============ CARROUSEL ======================*/

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
    
  
