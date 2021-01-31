let menuElem = document.getElementById('nav_desktop');
let titleElem = document.getElementById('mobile_button_open')
if ('mobile_button_open'){
    titleElem.onclick = function() {
        menuElem.classList.toggle('open');
    };
}

let button_discount = document.getElementById('button_discount');
let modal_window = document.getElementById('modal_window');
let button_close = document.getElementById('button_close');
let button_cancel = document.getElementById('button_cancel');
let button_send = document.getElementById('button_send');
    button_discount.onclick = function () {
        modal_window.classList.add('is_open');
};
    button_close.onclick = function () {
        modal_window.classList.remove('is_open');
};
    button_cancel.onclick = function () {
        modal_window.classList.remove('is_open');
}
    button_send.onclick = function (){
        modal_window.classList.remove('is_open');
        alert('Discount coupon will come to your mail');
    }


$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });
});

new WOW().init();