$(document).ready(function () {
// Smooth scroll override
$('.nav-link').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').stop().animate({
    scrollTop: $(target).offset().top
    }, 800, 'swing');
});
    
$(document).ready(function () {
    $('.navbar-collapse .nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })
})

// Animate sections when they come into view
function animateOnScroll() {
    $('section').each(function () {
    const $this = $(this);
    const sectionTop = $this.offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > sectionTop + 100 && !$this.hasClass('in-view')) {
        $this.addClass('in-view');
    }
    });
}

$(window).on('scroll resize', animateOnScroll);
animateOnScroll();

// Hide navbar on scroll down, show on scroll up
// let lastScrollTop = 0;
// $(window).on('scroll', function () {
//     let currentScroll = $(this).scrollTop();
//     if (currentScroll > lastScrollTop && currentScroll > 80) {
//         $('.navbar').fadeOut();
//         } else {
//         $('.navbar').fadeIn();
//     }
//     lastScrollTop = currentScroll;
//     });
});