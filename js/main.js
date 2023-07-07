



$(function(){

  var header = $("#header"),
      logo = $("#logo"),
      phone = $("#phone"),
      topH = $("#top").innerHeight();
      scrollOffset = $(window).scrollTop();
      checkScroll(scrollOffset);

  $(window).on("scroll", function(){
    
    scrollOffset= $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset){
    
      
      if(scrollOffset >= topH){
        header.addClass("fixed");
      }
      else{
        header.removeClass("fixed");
      };
      if(scrollOffset >= topH){
        logo.addClass("logo_fixed");
      }
      else{
        logo.removeClass("logo_fixed");
      };
      if(scrollOffset >= topH){
        phone.addClass("header__phone_fixed");
      }
      else{
        phone.removeClass("header__phone_fixed");
      };
  }

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();
    var $this = $(this), 
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

       $("#nav a").removeClass("menu__link__active");
       $this.addClass("menu__link__active");
        
     $("html, body").animate({
        scrollTop: blockOffset
     }, 700)   ;

  });

  $("#nav__togle").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $("#header").toggleClass("active");
  })


});
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",

  },

  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center:true,
    items:3,
    loop:true,
    margin:30,
    responsive:{
      600:{
          items:3,
      }
    }


  });
});
// $('.owl__slider').owlCarousel({
//   center: true,
//   items:2,
//   loop:true,
//   margin:10,
  
  
// });

// var main = new Swiper(".main__slider", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
var photo = new Swiper(".photo__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  }
  
});
var trips = new Swiper(".trips__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  }
  
});



const acc = document.getElementsByClassName("accordion__item");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
  
}

// // const anchors = document.querySelectorAll('a.scroll-to')

// // const trips = document.getElementById('trips');
// // trips.scrollIntoView({
// //   behavior: "smooth"}),
// //   trips.scrollIntoView(
// //     true);

// const navElements = document.querySelectorAll('a[href^="#"]');

// navElements.forEach((trips) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const trips = link.getAttribute('trips');
//     const target = document.querySelector(trips);
//     const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });


// navElements.forEach((photo) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const photo = link.getAttribute('photo');
//     const target = document.querySelector(photo);
//     const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });
// navElements.forEach((quest) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const quest = link.getAttribute('quest');
//     const target = document.querySelector(quest);
//     const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });
// navElements.forEach((contacts) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const contacts = link.getAttribute('contacts');
//     const target = document.querySelector(contacts);
//     const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });
// navElements.forEach((condition) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const condition = link.getAttribute('condition');
//     const target = document.querySelector(condition);
//     const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });
// navElements.forEach((prom) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const prom = link.getAttribute('prom');
//     const target = document.querySelector(prom);
//     const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });
// navElements.forEach((quadro) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const quadro = link.getAttribute('quadro');
//     const target = document.querySelector(quadro);
//     const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth"
//     });
//   });
// });