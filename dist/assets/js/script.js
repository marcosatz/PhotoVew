$(document).ready(function(){
    // ============================ MENU ==============================//
    $('.btn-menu').click(function(){
        $(this).toggleClass('open');
        // $('.menu-nav').fadeToggle();
    });

    $('.btn-menu').click(function() {
        $('.menu-nav').toggle("fade", {direction: "bottom" }, 500);
    });

    // ============================ MODAL ==============================//
    $('.icon-play').click(function(e) {
        e.preventDefault();
        $('.modal-video').fadeToggle();
        $('body').css({scroll: none})
    });

    $('.close-modal').click(function() {
        $('.modal-video').fadeToggle();
    });

     // ============================ Gallery ==============================//
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowOnTouchDevices': true,
        'disableScrolling': true,
    });
});