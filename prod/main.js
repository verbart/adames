$('.hero__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000
});

$('.burgerButton').on('click', function () {
    var burger = $(this);
    var target = $(burger.data('target'));

    burger.toggleClass('burgerButton_active');
    target.toggleClass('is-open');
});
