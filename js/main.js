$(function(){

    // -------------------- header --------------------

    // header toggleClass active
    $(window).scroll(function(){
        $(".header").toggleClass("active", $(window).scrollTop() > 0);
    });
    
    // category toggleClass active & body scroll stop
    $(".category>a").click(function(e){
        e.preventDefault();
        $(".drawerWrap").addClass("active");
        $(".drawerDim").addClass("active");
        $("body").addClass("stop");
    });
    $(".categoryClose, .drawerDim").click(function(e){
        e.preventDefault();
        $(".drawerWrap").removeClass("active");
        $(".drawerDim").removeClass("active");
        $("body").removeClass("stop");
    });

    // subMenu toggleClass on & gnbListDepth2ul slide
    $(".subMenu").click(function(){
        $(this).toggleClass("on");
        $(this).children(".gnbListDepth2ul").slideToggle(300);
    });

    // ads swiper
    const swiper1 = new Swiper('.adsSwiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    // openBtn toggleClass active
    $(".openBtn").click(function(){
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".menuPlus").slideDown(300).css("display","flex");
            $(".menu").removeClass("active");
            $(".all").addClass("active");
        } else {
            $(".menuPlus").slideUp(300);
            $(".menu").addClass("active");
            $(".all").removeClass("active");
        }
    });

    // menu swiper
    const swiper2 = new Swiper('.menu', {
        freeMode: true,
        slidesPerView: 1.1,
        breakpoints: {
            400: {
                slidesPerView: 1.5,
            },
            540: {
                slidesPerView: 2,
            }
        }
    });

    // -------------------- main --------------------
    
    // quick scroll active
    $(document).on('mousewheel', "html", function (e) {
        let wheel = e.originalEvent.wheelDelta;
        if (wheel > 0) {
            $(".quick").css({"display" : "block"})
            setTimeout(function() {
                $(".quick").css({"opacity" : "1"});
            }, 200);
        } else {
            $(".quick").css({"opacity" : "0"});
            setTimeout(function() {
                $(".quick").css({"display" : "none"})    
            }, 200);
        }

        if ($(window).scrollTop() == 0){
            $(".quick").css({"opacity" : "0"});
            setTimeout(function() {
                $(".quick").css({"display" : "none"})    
            }, 200);
        } 
    });
    
    // quick - up
    $(".up").click(function () {
        $("html").animate({ scrollTop: 0 }, 400);
    });
    
    // visual swiper
    const swiper3 = new Swiper('.visualSwiper', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    
    // control toggleClass active
    $(".bestControl>li>a").click(function(){
        $(".bestControl>li>a").removeClass("active");
        $(this).toggleClass("active");
        if ($(".bAll").hasClass("active")) {
            $(".bestTab").removeClass("active");
            $(".bAllTab").addClass("active");
        } else if ($(".bWomans").hasClass("active")) {
            $(".bestTab").removeClass("active");
            $(".bWomansTab").addClass("active");
        } else if ($(".bMens").hasClass("active")) {
            $(".bestTab").removeClass("active");
            $(".bMensTab").addClass("active");
        } else if ($(".bJunior").hasClass("active")) {
            $(".bestTab").removeClass("active");
            $(".bJuniorTab").addClass("active");
        } else if ($(".bHome").hasClass("active")) {
            $(".bestTab").removeClass("active");
            $(".bHomeTab").addClass("active");
        };
    });
    
    // control swiper
    const swiper4 = new Swiper('.control', {
        freeMode: true,
        slidesPerView: 1.1,
        breakpoints: {
            400: {
                slidesPerView: 1.5,
            },
            540: {
                slidesPerView: 2,
            }
        }
    });
    
    // customer swiper
    const swiper5 = new Swiper('.customerSwiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    
    // product swiper
    const swiper6 = new Swiper('.productSwiper', {
        freeMode: true,
        slidesPerView: 2.2,
    });
    
});