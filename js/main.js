$(function(){
    var $ftr = $('.footer');
    if( window.innerHeight > $ftr.offset().top + $ftr.outerHeight() ){
         $ftr.attr({'style': 'top:' + (window.innerHeight - $ftr.outerHeight()) + 'px;' });
    }
});

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

$(function() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("currentYear").innerHTML = year;
});

document.addEventListener('DOMContentLoaded', function () {

    grid = new Muuri('.grid');

    $('.filter').on('click', function(){
      var filterValue = $(this).attr("value");
      grid.filter(filterValue);
    });

});