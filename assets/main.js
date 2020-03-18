jQuery(document).ready(function($) {
    "use strict";


  
	      

// counter  
  $('.counte').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
  
    // close quickview
	// Top product add class active.  Shopify issue
  	$( ".top-product-tab .product-tab-sw li" ).first().addClass( "active" );
  	$( ".top-product-tab .tab-content .tab-pane" ).first().addClass( "active in" );
    $(".quickview-close").on("click", function() {
        $('.quickview-wrapper').hide();
        $('.quickview-wrapper').removeClass('open');
        $('.quick-modal').removeClass('show');
    });
    // open Vertical menu 
    $(".js-vertical-menu").on("click", function() {
        $('.vertical-wrapper').slideToggle(200);
        $(this).toggleClass('active');
    });
    //menu change icon and dropdown
    $(".icon-mobile").on("click", function() {
        $(this).toggleClass('active');
    });
    //menu change icon and dropdown
    

    $(".js-filter-menu li .js-plus-icon").on("click", function() {
        $(this).toggleClass('minus');
        $(this).parent().find(".filter-menu").slideToggle(function() {
            $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
        });
    });

    $(".filter .js-drop").on("click", function() {
        $(this).parent().find(".ion-ios-arrow-down").toggleClass('ion-ios-arrow-up');
        $(this).parent().find("ul").slideToggle(function() {
            $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
        });
        $(this).parent().find(".sidebar-product-list").slideToggle(function() {
            $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
        });
    });

    $(".checkout-page .js-drop").on("click", function() {
        $(this).toggleClass('active');

        $(this).parent().find(".filter-content").slideToggle(function() {
            $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
        });
    });
    // Product detail
    $(".js-close-tab").on("click", function() {
        $(this).removeClass('open')
        $('.detail-content').removeClass('active');
        $('.detail-tab').removeClass('open');

    });
    $('.js-tabs a').on("click", function() {
        $(".js-close-tab").addClass('open');
        $('.detail-tab').addClass('open');
        $('.detail-content').addClass('active');

    })
    if ($('.js-tabs > li').hasClass('active')) {
        $(".js-close-tab").addClass('open');
        $('.detail-tab').addClass('open');
        $('.detail-content').addClass('active');
    }

    // Product Grid
    $(".js-filter-menu li .js-plus-icon").on("click", function() {
        $(".js-filter-menu > li > a").toggleClass('active');
        $(this).toggleClass('minus');
        $(this).parent().find(".filter-menu").slideToggle(function() {
            $(this).next().stop(true).toggleClass('open', $(this).is(":visible"));
        });
    });
    
    // Open menu other page. Header-v2
    $(".js-menu").on("click", function() {
        $(this).toggleClass('active');
        $('.js-open-menu').toggleClass('open');
    });


    // Push menu home 5
    var menuLeft = $('.pushmenu-left');
    var menuHome6 = $('.menu-home5');
    var nav_list = $('.icon-cart');
    var nav_click = $('.icon-pushmenu');
    nav_list.on("click", function(event) {
        event.stopPropagation();
        $(this).toggleClass('active');
      	$('.overlay').addClass('active');
        $('body').toggleClass('pushmenu-push-toright-cart');
        menuLeft.toggleClass('pushmenu-open');
        $(".container").toggleClass("canvas-container");
    });
    nav_click.on("click", function(event) {
        event.stopPropagation();
        $('.overlay').addClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('pushmenu-push-toleft');
        menuHome6.toggleClass('pushmenu-open');
    });
    $(".overlay").on("click", function() {
        $(this).removeClass('active');
        $('body').removeClass('pushmenu-push-toright-cart').removeClass('pushmenu-push-toleft');
        menuLeft.removeClass('pushmenu-open');
        menuHome6.removeClass('pushmenu-open');
    });
    $(".close-menu-mobile").on("click", function() {
        $(this).removeClass('active');
        $('body').removeClass('pushmenu-push-toright-cart');
        menuLeft.removeClass('pushmenu-open');
    });
    $(".close-menu-mobile").on("click", function() {
        $('body').removeClass('pushmenu-push-toleft');
        menuHome6.removeClass('pushmenu-open');
        $(".overlay").removeClass('active');
    });
//   -------------------------
  $(".icon-sub-menu").on("click", function(e) {
    var $this = $(this);
    var thisMenu = $this.closest('.js-menubar');
    var thisMenuWrap = thisMenu.closest('.box-mobile-menu');
    thisMenu.removeClass('active');
    var text_next = $this.prev().text();
    thisMenuWrap.find('.box-title').html(text_next);
    thisMenu.find('li').removeClass('mobile-active');
    $this.parent().addClass('mobile-active').find('.menu-level1').addClass('open');
    $this.parent().closest('.menu-level1').css({ 'position': 'static', 'height': '0' });
    thisMenuWrap.find('.back-menu, .box-title').css('display', 'block');
    if ($this.parent().find('.fami-lazy:not(.already-fix-lazy)').length) { $this.parent().find('.fami-lazy:not(.already-fix-lazy)').lazy({ bind: 'event', delay: 0 }).addClass('already-fix-lazy') }
    e.preventDefault()
});
//   -------------------
  $(document).on('click', '.box-mobile-menu .back-menu', function(e) {
    var $this = $(this);
    var thisMenuWrap = $this.closest('.box-mobile-menu');
    var thisMenu = thisMenuWrap.find('.js-menubar');
    thisMenu.find('li.mobile-active').each(function() {
        thisMenu.find('li').removeClass('mobile-active');
        if ($(this).parent().hasClass('js-menubar')) { 
            thisMenu.addClass('active');
            $('.box-mobile-menu .box-title').html('MAIN MENU');
            $('.back-menu').css('display', 'none') } 
            else { 
                thisMenu.removeClass('active');
                $(this).parent().parent().addClass('mobile-active');
                $(this).parent().css({ 'position': 'absolute', 'height': 'auto' }); 
                var text_prev = $(this).parent().parent().children('a').text();
                $('.box-mobile-menu .box-title').html(text_prev) }
        e.preventDefault()
    })
});
  $('.js-pd-article').slick({
      	
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }
  ]
    });
    // Js product single slider
    $('.js-click-product').slick({
      	
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-product-slider',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        vertical: true,
        responsive: [

            {
                breakpoint: 1367,
                settings: {
                    vertical: false
                }
            }
        ]
    });
    $('.js-product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.js-click-product'
    });
  	
  
   $('.js-product-slider').on("mousedown mouseup", function() {
    $('.js-oneitem2').slick("slickGoTo", 1);
    
  })
   
    //SHOP LISTING FILTER
    // Price Slider
    if ($('.price-slider').length > 0) {
        $('.price-slider').slider({
            min: 100,
            max: 700,
            step: 10,
            value: [100, 400],


        });
    }
  	
    //SHOP GRID
    $(".view-mode > a").on("click", function() {
        $(this).addClass('active').siblings().removeClass('active');;

        if ($(this).hasClass('col2')) {
            $(".product-grid").addClass("product-grid-v2");
            $(".product-grid").removeClass("product-list");
        }
        if ($(this).hasClass('col')) {
            $(".product-grid").removeClass("product-grid-v2 product-list");
        }
        if ($(this).hasClass('list')) {
            $(".product-grid").addClass("product-list product-grid-v2");
        }
    });
    // Open zipcode
    $(".calculate").on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });
    // Checkout : open login box
    $(".js-showlogin").on('click', function() {
        $(".js-openlogin").slideToggle();
        $(this).toggleClass("active");
    });
    // Checkout : open coupon
    $(".js-showcp").on('click', function() {
        $(".js-opencp").slideToggle();
        $(this).toggleClass("active");

    });
    //Open filter menu mobile
    $('.filter-collection-left > a').on('click', function(e) {
        $('.wrappage').addClass('show-filter');
      	e.stopPropagation()
    });
    $(document).on("click", function(e) {
      if ($(e.target).is(".filter-collection-left > a") === false) {
        $('.wrappage').removeClass("show-filter");
      }
    });
    $('.close-sidebar-collection').click(function() {
        $('.wrappage').removeClass('show-filter');
    });

    
    // Scroll to TOP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').addClass("active");
          	
        } else {
            $('.scroll-top').removeClass("active");
          	
        }
    });
	$(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('.header-v2 .logo').addClass("logo-hidden");
          $('.header-v5 .logo-header5').addClass("logo-hidden");
          	$('.header-v2').addClass("bg-header-v1");
          	$('.header-v1').addClass("bg-header-v1");
          	$('.header-v3').removeClass("space_top_bot_20").addClass("bg-header-v1");
          	$('.header-v4').removeClass("space_top_bot_20").addClass("fixed").addClass("bg-header-v1").addClass("full-width");
          	$('.header-v5').removeClass("space_top_bot_20").addClass("bg-header-v1");
          	$('.form_search_mobile').addClass("hidden");
          	$('.promo_info_single_product').addClass("active");
        } else {
            $('.header-v2 .logo').removeClass("logo-hidden");
          	$('.header-v5 .logo-header5').removeClass("logo-hidden");
          	$('.header-v2').removeClass("bg-header-v1");
          	$('.header-v1').removeClass("bg-header-v1");
          	$('.header-v3').addClass("space_top_bot_20").removeClass("bg-header-v1");
          	$('.header-v4').addClass("space_top_bot_20").removeClass("fixed").removeClass("bg-header-v1").removeClass("full-width");
          	$('.header-v5').addClass("space_top_bot_20").removeClass("bg-header-v1");
          	$('.form_search_mobile').removeClass("hidden");
          	$('.promo_info_single_product').removeClass("active");
        }
    });
    $('.backtotop').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    // owl category
    $('.js-owl-cate').owlCarousel({
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 3,

            },
            1200: {
                items: 4,
                nav: false,
                dots:true
            },
            1600: {
                items: 4,
                margin: 40,
                nav: false,
                dots:true
            }
        }
    });
  	
    $('.js-owl-team').owlCarousel({
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4,
                margin: 40
            }
        }
    });
    $('.js-owl-cate2').owlCarousel({
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            },
            1600: {
                items: 3,
                margin: 40
            }
        }
    });


    // owl brand
    $('.js-owl-brand').owlCarousel({
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            1024: {
                items: 5
            },
            1200: {
                items: 7
            }
        }
    });
    $('.js-owl-brand2').owlCarousel({
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });
    $(".js-owl-brand2 .owl-nav > div").on("click", function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // product carousel
    $('.js-owl-product').owlCarousel({
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('.js-owl-product2').owlCarousel({

        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1200: {
                items: 3
            },
            1600: {
                items: 3,
                margin: 40
            }
        }
    });
    $(".js-owl-product2 .owl-nav > div").on("click", function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.js-owl-blog').owlCarousel({

        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1200: {
                items: 3
            },
            1600: {
                items: 3,
                margin: 40
            }
        }
    });
    $(".js-owl-blog .owl-nav > div").on("click", function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(".js-quickview-slide  .slick-arrow").on("click", function() {
        $(this).addClass('active');
    });
    $('.js-owl-post').owlCarousel({
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        items: 1,
        dots: false
    });
    $('.js-owl-quote').owlCarousel({
        nav: false,
        items: 1,
        dots: true,
        singleItem: true,
    });
    $('.js-oneitem').owlCarousel({
        nav: false,
        items: 1,
        dots: true,
        singleItem: true,
    });
    
    // Instagram carousel
    $('.js-owl-instagram').owlCarousel({
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        nav: false,
        navText: ["", ""],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    $('.js-multiple-row2').slick({
        dots: true,
        arrows: false,
        slidesPerRow: 4,
        rows: 2,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 813,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                    nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                    infinite: true,
                    dots: false,
                    slidesPerRow: 1,
                    rows: 1,
                }
            }
        ]
    });

    $('.js-multiple-row').slick({
        dots: true,
        arrows: false,
        slidesPerRow: 3,
        rows: 2,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesPerRow: 3,
                }
            },
            {
                breakpoint: 813,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                    nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                    infinite: true,
                    dots: false,
                    slidesPerRow: 1,
                    rows: 1,
                }
            }
        ]
    });
    $('.js-multiple-row3').slick({
        dots: true,
        arrows: false,
        slidesPerRow: 2,
        rows: 2,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 813,
                settings: {
                    slidesPerRow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                    nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
                    infinite: true,
                    dots: false,
                    slidesPerRow: 1,
                    rows: 1,
                }
            }
        ]
    });




    // js slick one item homepage 3

    // Slider collectiion full
    var $status = $('.pagingInfo');
    var $slickElement = $('.js-slider-collectionf');
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text('0' + i);
    });
    $('.js-slider-collectionf').on('afterChange', function(event, slick, currentSlide) {
        $('.slick-active').append('<div class="pagingInfo"');
    });
    $('.js-slider-collectionf').slick({
        autoplay: true,
        dots: true,
        centerMode: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: $('.post-fade'),
        dotsClass: 'custom_paging',
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dots"></a>';
        },

    });

    // Slider collectiion full
    var $status = $('.pagingInfo');
    var $slickElement = $('.js-slider-home4');
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text('0' + i);
    });
    $('.js-slider-home4').on('afterChange', function(event, slick, currentSlide) {
        $('.slick-active').append('<div class="pagingInfo"');
    });
    $('.js-slider-home4').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: $('.post-fade'),
        dotsClass: 'custom_paging',
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dots"></a>';
        },
    });
    // Slider collection detail
    $('.js-slider-collectiond').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: $('.post-fade'),
        dotsClass: 'custom_paging',
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dots"></a>';
        },

    });
    //  Show more

    // slider home 3 and home 2
    $('.js-slider-3items').slick({
        autoplay: false,
        infinite: false,
        arrows: false,
        dots: true
    });
    // js blogpost
    $('.js-single-post').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        dots: true
    });
    // js quickview
    $('.js-quickview-slide').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        dots: true
    });
    // slider home 1
    $('.js-slider-home2').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
    });

    // JS owl team Carousel 
    $('.js-owl-test').owlCarousel({
        items: 1,
        singleItem: true,
        nav: true,
        navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
        dots: false,
    });
    // Scroll slide homepage 2

    $('.slide-scroll').on('click', function() {
        $('html, body').animate({ scrollTop: $('section#contenthome2').offset().top }, 'slow');
        return false;
    });
    var handleScrollTop = function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 250);
    };
    // Footer to top
    $('footer > .scroll-top').on('click', function(e) {
        handleScrollTop(e);
    });

    $('.backto.vow-top').on('click', function(e) {
        handleScrollTop(e);
    });
    // Read more
    $(function() {
        var $header = $('.entry-content');
        var $half = parseInt($(".img-cal").height()) / 2;
        var $window = $(window).on('resize', function() {
            var height = $header.height() - $half;
            $header.height(height);
        }).trigger('resize'); //on page load


    });
    $(function() {

        var $el, $ps, $up, $p, totalHeight;

        $(".entry-content .btn-show").click(function() {

            // IE 7 doesn't even get this far. I didn't feel like dicking with it.

            totalHeight = 0

            $el = $(this);
            $p = $el.parent();
            $up = $p.parent();
            $ps = $up.find(".e-text");

            // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
            $ps.each(function() {
                totalHeight += $(this).outerHeight();
                // FAIL totalHeight += $(this).css("margin-bottom");
            });

            $up
                .css({
                    // Set height to prevent instant jumpdown when max height is removed
                    "height": $up.height(),
                    "max-height": 9999,
                    "margin-bottom": 30
                })
                .animate({
                    "height": totalHeight
                });

            // fade out read-more
            $up.removeClass('active');
            $p.fadeOut();

            // prevent jump-down
            return false;

        });

    });
  //Fixed Header
    $(window).scroll(function() {
        if($('.header-ontop').length>0){
            if($(window).width()>767){
                var ht = $('#header').height();
                var st = $(window).scrollTop();
                if(st>ht){
                    $('.header-ontop').addClass('fixed-ontop');
                }else{
                    $('.header-ontop').removeClass('fixed-ontop');
                }
            }
        }
      
      	if($('.header-ontop-mobile').length>0){
            if($(window).width()>320){
                var ht = $('#header').height();
                var st = $(window).scrollTop();
                if(st>ht){
                    $('.header-ontop-mobile').addClass('fixed-ontop');
                }else{
                    $('.header-ontop-mobile').removeClass('fixed-ontop');
                }
            }
        }
    });
//   slider home classic ciloe
  $('.js-slider-home-classic').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  fade:true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging : function(slider, i) {
	var thumb = $(slider.$slides[i]).data();
	return '<a>0'+(i+1)+'</a>';
	},
});
  $('.js-slider-home-clean').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  fade:true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  
});
  $('.slick-product-top-sale').slick({
  dots: true,
  infinite: false,
  autoplay:false,
  fade:false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
    customPaging : function(slider, i) {
	var thumb = $(slider.$slides[i]).data();
	return '<a></a>';
	},
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
    $('.slick-product-best-sellers').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      	}
     },
  	 {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
//   ------------------------
  $('.slick-Testimonal').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});
  //   ------------------------
  $('.slick-Testimonal2').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging : function(slider, i) {
	var thumb = $(slider.$slides[i]).data();
	return '<a>0'+(i+1)+'</a>';
	},
});
    //   ------------------------
  $('.slick-Testimonal3').slick({
  dots: false,
  infinite: true,
  autoplay:true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  customPaging : function(slider, i) {
	var thumb = $(slider.$slides[i]).data();
	return '<a>0'+(i+1)+'</a>';
	},
        responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1208,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
  //   ------------------------
  $('.slick-Testimonal4').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});
//   ---------------------
  $('.slick-brand').slick({
  dots: false,
  infinite: true,
  autoplay:true,
    
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1208,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
    $('.slick-testimonial').slick({
  dots: true,
  infinite: true,
  autoplay:true,     
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});
  
      $('.slick-team').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 500,
  infinite:true,
  arrows:false,    
  slidesToShow: 4,
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1208,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
     {
      breakpoint: 568,
      settings: {
        slidesToShow: 2
      }
    }
  ]
    });
//   ---------------------load more
  $(function () {
    $(".loader").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".loader:hidden").slice(0, 5).slideDown();
        if ($(".loader:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        
    });
});
//   -------------------
  $('.js-slider-blog').slick({
  dots: false,
  infinite: true,
  autoplay:false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 3,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
  //   -------------------
  $('.js-slider-blog2').slick({
  dots: false,
  infinite: true,
  autoplay:false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 2,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
  //   -------------------
  $('.js-slider-home-modern').slick({
  dots: true,
  infinite: true,
  autoplay:false,
  speed: 500,
  fade: true,
    });
// -------------
  $(".register-link").on("click", function() {
        $(".login-form").addClass('hidden');
    	$(".register-form").removeClass('hidden');
        $('.register-link').addClass('hidden');
    	$('.login-link').removeClass('hidden');
    	$('#RecoverPasswordForm').addClass('hidden');
    });
  $(".login-link").on("click", function() {
        $(".login-form").removeClass('hidden');
        $('.register-form').addClass('hidden');
    	$('.login-link').addClass('hidden');
    	$('.register-link').removeClass('hidden');
    });
  // -------form search------
  
      $('#btn-search .icon-magnifier').on('click',function(){
    	$('.form-search').css('right','0');
    });
    $('#btn-search').on('click',function(){
    	$('.form-search').css('right','0');
    });
  	$('.btn-search').on('click',function(){
    	$('.form-search').css('right','0');
    });
    $('#close-search').on('click',function(){
    	$('.form-search').css('right','-1920px');
    });
    // ------------end------------
  //   -------------------
  $('.slick-top-collection').slick({
  dots: true,
  infinite: false,
  autoplay:false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 3,
    customPaging : function(slider, i) {
	var thumb = $(slider.$slides[i]).data();
	return '<a></a>';
	},
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
//   ------------------------
  $('.btn_filter_full').on('click',function(){
	if($(this).attr('data-click-state') == 0) {
	$(this).attr('data-click-state', 1);
	$('.btn_filter_full').addClass('active');
	$('.filter_full').addClass('h_100');
} else {
	$(this).attr('data-click-state', 0);
	$('.btn_filter_full').removeClass('active');
	$('.filter_full').removeClass('h_100');
}
});
//   ------------------
  $('.btn_sorting_mb').on('click',function(){
	if($(this).attr('data-click-state') == 0) {
	$(this).attr('data-click-state', 1);
	$('.dropdown_menu_sorting').addClass('active');
} else {
	$(this).attr('data-click-state', 0);
	$('.dropdown_menu_sorting').removeClass('active');
}
});
//   ------------------
  $('.size_3').on('click',function(){
	$(this).addClass('active');
    $('.layout_product_shop').addClass('column-3').removeClass('column-4').removeClass('column-30').removeClass('column-20').removeClass('column-6').removeClass('column-50').removeClass('layout_pd_list_shop');
    $('.size_4').removeClass('active');
    $('.size_5').removeClass('active');
    $('.size_6').removeClass('active');
});
 $('.size_4').on('click',function(){
	$(this).addClass('active');
    $('.layout_product_shop').addClass('column-4').removeClass('column-3').removeClass('column-20').removeClass('column-6').removeClass('column-50').removeClass('layout_pd_list_shop');
    $('.size_3').removeClass('active');
    $('.size_5').removeClass('active');
    $('.size_6').removeClass('active');
});
   $('.size_5').on('click',function(){
	$(this).addClass('active');
    $('.layout_product_shop').addClass('column-20').removeClass('column-4').removeClass('column-30').removeClass('column-3').removeClass('column-6').removeClass('column-50').removeClass('layout_pd_list_shop');
    $('.size_4').removeClass('active');
    $('.size_3').removeClass('active');
    $('.size_6').removeClass('active');
});
   $('.size_6').on('click',function(){
	$(this).addClass('active');
    $('.layout_product_shop').addClass('column-6').removeClass('column-4').removeClass('column-30').removeClass('column-20').removeClass('column-3').removeClass('column-50').removeClass('layout_pd_list_shop');
    $('.size_4').removeClass('active');
    $('.size_5').removeClass('active');
    $('.size_3').removeClass('active');
});
//   -----------------------
  $('.btn_list_layout').on('click',function(){
	$(this).addClass('active');
    $('.btn_grid_layout').removeClass('active');
    $('.layout_product_shop').addClass('column-50').addClass('layout_pd_list_shop').removeClass('column-4').removeClass('column-30').removeClass('column-3').removeClass('column-6').removeClass('column-20');
});
  $('.btn_grid_layout').on('click',function(){
	$(this).addClass('active');
    $('.btn_list_layout').removeClass('active');
    $('.layout_product_shop').removeClass('column-50').removeClass('layout_pd_list_shop').removeClass('column-30').removeClass('column-3').removeClass('column-6').removeClass('column-20');
});
//   --------------------
  $('.close_promo_pd').on('click',function(){
	$('.promo_info_single_product').addClass('hidden');
});
//   ---------------------
  $('.btn_size_guide').on('click',function(){
	$('.content_size_guide').addClass('active');
    $('.overlay').addClass('active');
});
  $('.overlay').on('click',function(){
	$('.content_size_guide').removeClass('active');
    $('.overlay').removeClass('active');
    $('.sidebar_mb').removeClass('active');
});
  $('.close_size_guide').on('click',function(){
	$('.content_size_guide').removeClass('active');
    $('.overlay').removeClass('active');
});
//   ------------------------------------
    $('#btn-login .zoa-icon-user').on('click',function(){
	$('.login_form_pc').addClass('active');
});
  $('#btn-login').on('click',function(){
	$('.login_form_pc').addClass('active');
});
  $('.btn_close_login').on('click',function(){
	$('.login_form_pc').removeClass('active');
});
  $('#RecoverPassword').on('click',function(){
	$('.login-form').addClass('hidden');
    $('#RecoverPasswordForm').removeClass('hidden');
});
  $('#HideRecoverPasswordLink').on('click',function(){
	$('.login-form').removeClass('hidden');
    $('#RecoverPasswordForm').addClass('hidden');
});
//   ------------------------------------
  $('.js_relate_article').slick({
  dots: false,
  infinite: false,
  autoplay:false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 3,
    
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
  // ------accordion--------
 var acc = document.getElementsByClassName("accordion");
 
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// ---------end-----------
  $('.btn_filter_mb').on('click',function(){
    $('.sidebar_mb').addClass('active');
    $('.overlay').addClass('active');
  });
  $('.close_sidebar_mb').on('click',function(){
    $('.sidebar_mb').removeClass('active');
    $('.overlay').removeClass('active');
  });
  // Cart term condition
  $(window).load(function(){
  $('.shopify-payment-button__button').addClass('btn-disabled');
});
  
  $('#product-cart__agree-product-template').change(function () {

    if ($(this).is(":checked")) {
        $('.shopify-payment-button button').removeClass("btn-disabled");    
    } else {
        $('.shopify-payment-button button').addClass("btn-disabled");
    }
});




});








