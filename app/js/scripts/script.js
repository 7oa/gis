// js jquery
$(document).ready(function() {
    //TODO: переделать ховеры объектов на главной
	$('.obj').hover(function () {
		$(this).addClass('active').siblings().removeClass("active");
    });

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
        navigation: {
            nextEl: '.paretners-slider-next',
            prevEl: '.paretners-slider-prev',
        },
    });
    var swiper = new Swiper('.sertificates-slider', {
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
            // when window width is <= 425
            425: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 768
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        navigation: {
            nextEl: '.sertificates-slider-next',
            prevEl: '.sertificates-slider-prev'
        }
    });
});