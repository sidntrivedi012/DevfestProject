$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 100) {
    	$('nav').removeClass('nav1').addClass('shrink');
    }
    else {
    $('nav').removeClass('shrink').addClass('nav1');
    }
  });
});