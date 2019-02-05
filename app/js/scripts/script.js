// js jquery
$(document).ready(function() {

	$('.js-obj')
    .mouseover(function(){
        var objClass = $(this).data('class');
        $('.'+objClass+' .obj__link_active').stop().fadeIn();
        $('.pin.disabled').stop().fadeIn();
        $('.'+objClass+' .pin.disabled').hide();
        $('.'+objClass+' .obj__label').stop().addClass("open");
    })
    .mouseout(function(){
        var objClass = $(this).data('class');
        $('.'+objClass+' .obj__link_active').stop().fadeOut();
        $('.pin.disabled').stop().fadeOut();
        $('.'+objClass+' .obj__label').stop().removeClass("open");
    });

    if ($(window).width() >= 768) {
        $(".obj__label").each(function () {
            $(this).css("margin-left", -($(this).width() / 2));
        });
        /*$(".blog-item_l").each(function () {
            var cat = $(this).find(".blog-item__cat");
            var ttl = $(this).find(".blog-item__ttl");
            var img = $(this).find("img").attr('src');
            var src = $(this).find(".blog-item__src");
            var cnt = $(this).find(".blog-item__cnt");
            ttl.prependTo(cnt);
            cat.prependTo(cnt);
            src.css({"background-image": "url(" + img + ")"}).empty();
        })*/
    }


    $(".js-burger").click(function(){
        $(".js-menu").addClass("open");
    });

    $(".js-close").click(function(){
        $(".js-menu").removeClass("open");
    });

    $(window).on('load resize',function(){
        if ($(window).width() >= '1280'){
            $(".js-menu").removeClass("open");
        }
    });

    var swiper = new Swiper('.paretners-slider', {
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: {
            nextEl: '.paretners-slider-next',
            prevEl: '.paretners-slider-prev'
        }
    });

    var swiper = new Swiper('.diplom-slider', {
        slidesPerView: 3,
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: {
            nextEl: '.diplom-slider-next',
            prevEl: '.diplom-slider-prev'
        }
    });

    var swiper = new Swiper('.sertificates-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        preventClicks: false,
        preventClicksPropagation: false,
        breakpoints: {
            // when window width is <= 425
            425: {
                slidesPerView: 2
            },
            // when window width is <= 900
            900: {
                slidesPerView: 3
            },
            // when window width is <= 1060
            1060: {
                slidesPerView: 4
            }
        },
        navigation: {
            nextEl: '.sertificates-slider-next',
            prevEl: '.sertificates-slider-prev'
        }
    });

    if ($(window).width() < 768) {
        $('.js-select').click(function () {
            $(this).next().slideToggle();
        });
        // $('.js-filtr-item').click(function(){
        //     var val = $(this).text();
        //     $('.js-select').text(val).next().slideUp();
        // });
        // if($('.js-filtr-item.selected').length>0){
        //     //var sel = $('.js-filtr-item.selected').text();
        //     var option_all = $('.js-filtr-item.selected').map(function () {
        //         return $(this).text();
        //     }).get().join(',');
        //     $('.js-select').text(option_all);
        // }
    }

    $(".js-more").click(function () {
        var txt = $(this).data('val');
        if(!$(this).parent().hasClass("hide")){
            txt = "Свернуть";
        }

        $(this).text(txt)
            .parent().toggleClass("hide")
            .prev().toggleClass("open");
    });

    if ($(window).width() >= 768) {
        var $gis = $('.gis-list').imagesLoaded( function() {
            $gis.masonry({
                itemSelector: '.gis-item',
                fitWidth: true,
                gutter: 20
            });
        });

        var $blog = $('.blog-list').imagesLoaded( function() {
            $blog.masonry({
                columnWidth: '.blog-item_m',
                itemSelector: '.blog-item',
                gutter: 20,
                fitWidth: true,
            });
        });
    }

    if ($(window).width() >= '1280') {
        setTimeout( function() {
            $('.blog-item_s').each(function () {
                if($(this).position().left==0){
                    $(this).css({"left":"105px"});
                }
            });
        }, 1000);
    }
    if($(".preson-edu__cnt").height()<600){
        $(".preson-edu__more").hide();
        $(".preson-edu__cnt").addClass("open");
    }
    if($(".preson-projects__list").height()<800){
        $(".preson-projects__more").hide();
        $(".preson-projects__list").addClass("open");
    }



});