$(function() {
    var pagetop = $('.page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }

        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight();

        if ( scrollHeight - scrollPosition <= footHeight ) {
            pagetop.css({
                "position":"fixed",
                "bottom": footHeight + 10
            });
        } else {
            pagetop.css({
                "position":"fixed",
                "bottom": "10px"
            });
        }
    });

    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
