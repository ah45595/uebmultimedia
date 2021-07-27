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
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});