$(document).ready(function(){
    // Toggle menu
    $('.toggle-icon').click( function() {
        $('.menu-area ul').addClass('right');
        $(".crose-icon").show(); 
        $(this).hide(); 
        return false;
    }); 
    $('.crose-icon').click( function() {
        $('.menu-area ul').removeClass('right')
        $(".toggle-icon").show(); 
        $(this).hide(); 
        return false;
    });       
     //Sticky Header 
        $(window).scroll(function(){
            if ($(document).scrollTop () < 1){
                $(".header-area").removeClass("fixed");
                $(".header-area").removeClass("active-bg");
            }
            else if ($(document).scrollTop () > 300){
                $(".header-area").removeClass("fixed");
                $(".header-area").addClass("active-bg");
            }
            else{
                $(".header-area").addClass("fixed");
            }
        });

    // Slick Slide
        $('.bannar-area').slick({
            autoplay:true,
            infinite: true,
            speed: 350,
            fade: true,
            cssEase: 'linear'
        });
        // Owl Carousel
        $('.slide-top').owlCarousel({
            loop:true,
            center:true,
            margin:10,
            dots:false,
            autoplay:true,
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:1,
                },
                992:{
                    items:3,
                }
            }
        })
        // Owl Carousel bottom slide
        $(".slider-bottom").owlCarousel({
            loop:true,
            autoplay:true,
            margin:10,
            dots:false,
            nav:false,
            items:1,
        })

        // Mixitup Portfolio
        var gallary = document.querySelector('.portfolio-item');
        var mixer = mixitup(gallary, {
        load: {
            filter: '.app'
        }
        });
        // Testimonials 
        $('.inner-testimonials').owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:false,
            autoplay:true,
            margin:10,
            navText:['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-chevron-right"></i>']
           
        })
         // Testimonials 
         $('.member-slide').owlCarousel({
             items:4,
            loop:true,
            autoplay:true,
            nav:true,
            dots:false,
            margin:10,
            navText:['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-chevron-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:1,
                },
                767:{
                    items:2,
                },
                992:{
                    items:4,
                }
            }
        })
        // Client Area
        $('.client-team').owlCarousel({
            autoplay:true,
            nav:true,
            dots:false,
            loop:true,
            margin:10,
            navText:['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-chevron-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                767:{
                    items:3,
                },
                992:{
                    items:5,
                }
            }
        })
        // Service magnific
        $('.click-1').magnificPopup({
            type:'image'
        });
        // Vedio Paralax Magnific
        $('.vedio-para').magnificPopup({
            type:'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div>',
              
                patterns: {
                  youtube: {
                    index: 'youtube.com/', 
              
                    id: 'v=',
              
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                  },
                  vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                  },
                  gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                  }
              
                },
              
                srcAction: 'iframe_src',
              }

        });

});