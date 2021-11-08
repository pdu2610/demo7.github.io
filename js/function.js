$('.ourservice').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 1000,
    // stagePadding:100,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        767: {
            items: 2
        },
        991: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

if( $(".plan .item").length) {
    var owl = $(".plan");
    var autoplay;
    var autodot;
    var autonav;
    if (owl.children().length == 3) {autoplay = false, autodot = false, autonav = false}
    else {autoplay = false, autodot = true, autonav = false}
    owl.owlCarousel({
        loop:true,
        autoplay:false,
        mouseDrag:true,
        autoplayTimeout:4000,
        smartSpeed:1200,
        margin:0,
        nav:autonav,
        dots:autodot,
        slideBy: 1,
        navText : ["",""],
        responsive:{
            0:{
                items:1,
                dots:true,
                autoplay:false
            },
            640:{
                items:2,
                dots:true,
                autoplay:false
            },
            992:{
                items:3
            }

        }

    });

}

$('.ourdoctor').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    // stagePadding:100,
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.pricing').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    // stagePadding:100,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        481: {
            items: 2
        },
        575: {
            items: 2
        },
        767: {
            items: 2
        },
        991: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('.ourblog').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    // stagePadding:100,
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

$('.ourgallery').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    // stagePadding:100,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        480: {
            items: 2
        },
        574: {
            items: 3
        },
        766: {
            items: 4
        },
        991: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
})

$('.partner').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    // stagePadding:100,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        480: {
            items: 2
        },
        575: {
            items: 2
        },
        767: {
            items: 4
        },
        991: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$("#datebook").datepicker({});
$("#footertime").heapbox({});
$('#other-field').focus(function() {
    $('#other').prop("checked", true);
});

$("#headdate").datepicker({});
$("#headtime").heapbox({});
$('#other-field').focus(function() {
    $('#other').prop("checked", true);
});

(function($) {
    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.mainmenu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e) {
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.mainmenu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);