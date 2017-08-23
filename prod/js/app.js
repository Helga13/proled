$(document).ready(function () {
	
  $('.slogan').slick({
    dots: true,
    arrows: false,
//    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
  $('.lamp_slider').slick({
    infinite: true,
    speed: 500,
    variableWidth: true
  });
  
  
})