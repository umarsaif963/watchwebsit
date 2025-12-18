



















/*========SHOW MENU===========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========MENU SHOW===========*/
if(navToggle){
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add('show-menu')
  })
}
/*========MENU HIDDEN=========*/          
if(navClose){
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============SHOW CHART==========*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*=============CART SHOW===========*/
if(cartShop){
  cartShop.addEventListener("click", () =>{
    cart.classList.add('show-cart')
  })
}
/*=========CART HIDDEN=======*/
if(cartClose){
  cartClose.addEventListener("click", () =>{
    cart.classList.remove('show-cart')
  })
}

/*=======SHOW LOGIN=======*/
const login = document.getElementById('login'),
loginButton = document.getElementById('login-button'),
loginClose = document.getElementById('login-close')
/*=========SHOW LOGIN=======*/
if(loginButton){
  loginButton.addEventListener("click" , () =>{
    login.classList.add('show-login')
  })
}

/*========HIDDEN LOGIN======*/
if(loginClose){
  loginClose.addEventListener("click" , () =>{
    login.classList.remove('show-login')
  })
}





















var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*==========Change background Header========*/
function scrollHeader(){
  const header= document.getElementById('header')
  if(this.scrollY>=50)header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

/*=========NEW SWIPER============*/

var newSwiper = new Swiper(".new-swiper",{
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop:'true',
});

/*===========SHOW SCROLL UP============*/

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==========QUESTIONS ACCORDIAN============*/
const accordionItem = document.querySelectorAll('.questions__item');

accordionItem.forEach((item) =>{
  const accordionHeader = item.querySelector('.questions__header');

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if(openItem && openItem !== item){
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.questions__content');
if(item.classList.contains('accordion-open')){
  accordionContent.removeAttribute('style');
  item.classList.remove('accordion-open');
}
else{
  accordionContent.style.height = accordionContent.scrollHeight + 'px';
  item.classList.add('accordion-open');
}
}