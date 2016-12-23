import $ from 'jquery';


$('.burgerButton').on('click', function toggle() {
    const burger = $(this);
    const target = $(burger.data('target'));

    burger.toggleClass('burgerButton_active');
    target.toggleClass('is-open');
});
