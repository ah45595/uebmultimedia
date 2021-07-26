function videoUrl(hm){
    document.getElementById("slider1").src = hm;
}

$(window).scroll(function() {
	if($(document).scrollTop() < 1){
		$('.header').removeClass('fixed');
		$('.header').removeClass('active');		
	}else if($(document).scrollTop() > 100 ){
		$('.header').removeClass('fixed');
		$('.header').addClass('active');
	}else{
		$('.header').addClass('fixed');
	}
});