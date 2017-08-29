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
  
  $('.js-toggle-menu').click(function (e) {
        e.preventDefault();
        $('.popup.menu_popup').addClass('menu-open');
    })
    $('.popup.menu_popup').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $('.popup.menu_popup').removeClass('menu-open');    
        }
    })
    $('.menu_popup .popup_close').click(function (e) {
        e.preventDefault();
        $('.popup.menu_popup').removeClass('menu-open');
    });
  
  // popup
  
  $('.js-popup').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
//        	$('#'+DataId).fadeIn(100);
        	$('#'+DataId).fadeIn(100);
//        	$('body').css('overflow', 'hidden');  
        }
    });
    $('.popup.center').click(function (e) {
        e = event || window.event
        if (e.target == this) {
            $(this).fadeOut(100);
//            $('body').css('overflow', 'auto'); 
        }
    });
//	$('.center .popup_close').click(function (e) {
//         e.preventDefault();
//           $(this).parents('.popup.center').fadeOut(100);
//           $('body').css('overflow', 'auto'); 
//    });
    $('.center .popup_content').click(function(e) {
		e.stopPropagation();
	}); 
  
  
  
});
