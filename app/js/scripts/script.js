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
});