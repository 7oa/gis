// js jquery
$(document).ready(function() {
    //TODO: переделать ховеры объектов на главной
	$('.obj').hover(function () {
		$(this).addClass('active').siblings().removeClass("active");
    })
});