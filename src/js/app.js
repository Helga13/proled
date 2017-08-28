$(document).ready(function () {
	
  $('.slogan').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
  $('.lamp_slider, .slider_attr').slick({
    infinite: true,
    speed: 500,
    variableWidth: true
  });
  
  $('#index_phone').mask("+375 (99) 999 99 99");
  
  // product zoom
  $('#img_01').elevateZoom({
    constrainType:'height', 
//    constrainSize:450, 
    zoomType: 'lens', 
    containLensZoom: true, 
    gallery:'gal1', 
    cursor: 'pointer', 
    galleryActiveClass: 'active'
  }); 
  
  
  $('.tumbler label').on('click', function(){
    if($('.tumbler label').parent('.tumbler').find('input').prop('checked')){  
      $('.tumbler label').text('Теплый свет (3000К)');
       }else{
       $('.tumbler label').text('Холодный свет (4000К)');
       }
  });
  
//  js-toggle-menu
  
});
