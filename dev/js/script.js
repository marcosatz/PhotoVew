$(document).ready(function(){

    var width = 768;
    var size = $( window ).width();
    
    $(window).resize( function () {
        size =  $( window ).width();
        
        console.log(size);
    });
    
    if (size <= width) {
        $('.search svg').click(function() {
            $('.search form').fadeIn();
        });
    }
    
    
    $('.btn-menu-list').click(function() {
        $('.list-menu').toggle("slide", {direction: "left" }, 500);
    });

    function btn_menu_list() {
        if ($(window).width() >= 768) {
            $('.list-menu').css('display', block);
        }
    }

    $(window).resize(function() {
		btn_menu_list()
    });
    
    jQuery(".owl-carousel").owlCarousel({
        margin:10,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },

            576: {
                items: 3
            },

            992: {
                items: 4
            },
        }
    });


    
});

