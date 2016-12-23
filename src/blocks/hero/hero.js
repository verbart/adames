import $ from 'jquery';

require('slick-carousel');

$('.hero__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000
});
