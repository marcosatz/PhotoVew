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
    // $('.icon-play').click(function(e) {
    //     e.preventDefault();
    //     $('.icon-play').parent();
    //     $('.modal-video').fadeToggle();
    //     $('body').css({scroll: none})
    // });

    $('.modal-video').click(function() {
        $('.modal-video').fadeToggle();
        $('#yt-video-id').attr('src', '');
    });

    $('.modal-container').click(function(e) {
        e.stopPropagation();
    });

    function yt_get_video_id(url) {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
		var match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
    };

	$('.video').on('click', function() {
		var url = $(this).attr('id');
        var id = yt_get_video_id(url);
        

        $('.modal-video').fadeToggle();
		// $('#yt-video-id').val(id);
        $('#yt-video-id').attr('src', 'https://www.youtube.com/embed/' + id + '?autoplay=1');
        
    });
    
    function modalHeight() {
        var modalHeight = $('.modal-video').height();
        $('#yt-video-id').css('height', modalHeight + 'px');
    }


    // ============================ Gallery ==============================//
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowOnTouchDevices': true,
        'disableScrolling': true,
    });

    $('.hero-slide').slick();
});