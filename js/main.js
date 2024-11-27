const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo-svg use ');
const mMenuToggle = document.querySelector('.mobile-menu-toggle ');
const menu = document.querySelector('.mobile-menu ');
const lightModeOn=(event)=>{
  navbar.classList.add("navbar-light");
  logo.href.baseVal="img/sprite.svg#logo";
};
const lightModeOff=(event)=>{
  navbar.classList.remove("navbar-light");
  logo.href.baseVal="img/sprite.svg#logo-light";
};
const openMenu=(event)=> {
  menu.classList.add("is-open");// функция открывания меню,вешает класс is-open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow="hidden";//запрещаем прокрутку сайта под меню
  lightModeOn();
};
const closeMenu=(event)=> {
  menu.classList.remove("is-open");// функция закрывания меню,вешает класс is-open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow="";//возвращает прокрутку сайта под меню
  lightModeOff();
};

window.addEventListener('scroll', () => {this.scrollY >1 ? lightModeOn() : lightModeOff();
});
mMenuToggle.addEventListener("click", (event) =>{
  event.preventDefault();
menu.classList.contains("is-open") ? closeMenu() : openMenu();
});
const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 5,
  autoHeight: true,
  loop: true,
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      centeredSlides: true,
      slidersOffsetBefore: -50
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  }
});