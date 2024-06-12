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

/* ========== SLIDER ALBUNS MUSICA ==================*/
    const wrapper = document.querySelector(".card__container");
    const carousel = document.querySelector(".slider__wrapper");
    const arrowsBtns = document.querySelectorAll(".card__container button");
    const firstCardWidth = carousel.querySelector(".playlist__card").offsetWidth;
    // Criar um scroll infinito
    const carouselChildrens = [...carousel.children];

    let isDragging = false, startX, startScrollLeft, timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insere copias do ultimo card do carosel no inicio do scroll
    carouselChildrens.slice(-cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insere copias do primeiro card do carosel no final do scroll
    carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowsBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging")
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return; // isDragging for falso retorna aqui
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging")
    }

    const autoPlay = () => {
        if(window.innerWidth < 800) return; // Retorna quando a janela for menor que 800
        // Autoplay carousel depois de 2500ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();

    const infiniteScroll = () => {
        // Se o carousel esta no inicio retornará para o final
        if(carousel.scrollLeft === 0){
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        // Se o carousel esta no final retornará para o inicio
        } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        // Limpa o timeout e a inicialização do autoplay quando o mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

/* ========== SEGUNDO SLIDER ALBUNS ================== */
    const wrapperTwo = document.querySelector(".card__container2");
    const carouselTwo = document.querySelector(".slider__wrapper2");
    const arrowsBtnsTwo = document.querySelectorAll(".card__container2 button");
    const firstCardWidthTwo = carouselTwo.querySelector(".playlist__card2").offsetWidth;

    // Criar um scroll infinito
    const carouselChildrensTwo = [...carouselTwo.children];

    let isDraggingTwo = false, startXTwo, startScrollLeftTwo, timeoutIdTwo;

    // Pegar o número de cartões que cabem no carrossel de uma só vez
    let cardPerViewTwo = Math.round(carouselTwo.offsetWidth / firstCardWidthTwo);

    // Insere copias do ultimo card do carrosel no inicio do scroll
    carouselChildrensTwo.slice(-cardPerView).forEach(card => {
        carouselTwo.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insere copias do primeiro card do carrosel no final do scroll
    carouselChildrensTwo.slice(0, cardPerView).reverse().forEach(card => {
        carouselTwo.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Adiciona funcionalidade aos botões de seta para rolar o carrossel para a esquerda e para a direita
    arrowsBtnsTwo.forEach(btn => {
        btn.addEventListener("click", () => {
            carouselTwo.scrollLeft += btn.id === "left2" ? - firstCardWidthTwo : firstCardWidthTwo;
        });
    });

    const dragStartTwo = (e) => {
        isDragging = true;
        carouselTwo.classList.add("dragging")
        // Registra o cursor inicial e a posição de rolagem do carrossel
        startXTwo = e.pageX;
        startScrollLeftTwo = carouselTwo.scrollLeft;
    }

    const draggingTwo = (e) => {
        if(!isDragging) return; // isDragging for falso retorna aqui
        // Atualiza a posição de rolagem do carrossel com base no movimento do cursor
        carouselTwo.scrollLeft = startScrollLeftTwo - (e.pageX - startXTwo);
    }

    const dragStopTwo = () => {
        isDragging = false;
        carouselTwo.classList.remove("dragging")
    }

    const autoPlayTwo = () => {
        if(window.innerWidth < 800) return; // Retorna quando a janela for menor que 800
        // Autoplay carousel depois de 2500ms
        timeoutIdTwo = setTimeout(() => carouselTwo.scrollLeft += firstCardWidthTwo, 2500);
    }
    autoPlayTwo();

    const infiniteScrollTwo = () => {
        // Se o carousel esta no inicio retornará para o final
        if(carouselTwo.scrollLeft === 0){
            carouselTwo.classList.add("no-transition");
            carouselTwo.scrollLeft = carouselTwo.scrollWidth - (2 * carouselTwo.offsetWidth);
            carouselTwo.classList.remove("no-transition");
        // Se o carousel esta no final retornará para o inicio
        } else if(Math.ceil(carouselTwo.scrollLeft) === carouselTwo.scrollWidth - carouselTwo.offsetWidth) {
            carouselTwo.classList.add("no-transition");
            carouselTwo.scrollLeft = carouselTwo.offsetWidth;
            carouselTwo.classList.remove("no-transition");
        }
        // Limpa o timeout e a inicialização do autoplay quando o mouse is not hovering over carousel
        clearTimeout(timeoutIdTwo);
        if(!wrapperTwo.matches(":hover")) autoPlay();
    }

    carouselTwo.addEventListener("mousedown", dragStartTwo);
    carouselTwo.addEventListener("mousemove", draggingTwo);
    document.addEventListener("mouseup", dragStopTwo);
    carouselTwo.addEventListener("scroll", infiniteScrollTwo);
    wrapperTwo.addEventListener("mouseenter", () => clearTimeout(timeoutIdTwo));
    wrapperTwo.addEventListener("mouseleave", autoPlayTwo);

