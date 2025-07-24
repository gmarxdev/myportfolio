$(document).ready(function () {
    // Smooth scroll override
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 200, 'swing', function () {
            // ✅ Ensure section becomes visible after scroll
            animateOnScroll();
        });
    });

    // Collapse navbar on link click (for mobile)
    $('.navbar-collapse .nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

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
    animateOnScroll(); // Initial call
});


$(document).ready(function () {
    $('#enterBtn').on('click', function () {
            // Optional: Fade out before redirect
            $('body').fadeOut(300, function () {
            window.location.href = "portfolio.html";
        });
    });
});
