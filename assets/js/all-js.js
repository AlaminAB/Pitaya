

           jQuery('.navicon').on('click', function (e) {
                    e.preventDefault();
                    jQuery(this).toggleClass('navicon--active');
                    jQuery('.toggle').toggleClass('toggle--active');
                    
                     });
                  
                  jQuery('.navicon').mouseleave(function(){
                  jQuery(this).addClass("navicon--actived");
                  });
                  
                  
      jQuery(window).on('load', function () {
         setTimeout(function () {
         jQuery(window).scrollTop(0);
         });         
         });
         
             jQuery(document).ready(function($) {
                  
                 $(".scroll").click(function(event){    
                     event.preventDefault();
                     $('html,body').animate({scrollTop:$(this.hash).offset().top},0);
                 });
             });
             

jQuery(document).ready(function(jQuery) {
                      jQuery(".scroll").click(function(event){    
                          event.preventDefault();
                         //jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top},1000);
                       });
                       
                     
     


                  


                
                  
                  function isScrolledIntoView(el) {
                  var elemTop = el.getBoundingClientRect().top;
                  var elemBottom = el.getBoundingClientRect().bottom;
                  
                  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
                  return isVisible;
                  }
                  
                  jQuery(window).on('scroll', function() {
                  
                  if (isScrolledIntoView(document.getElementById('contour'))) {
                   
                  jQuery('.counter').each(function () {
                  jQuery( ".counter" ).addClass( "visib" );
                  jQuery( ".counter" ).addClass( "contour" );
                  jQuery( ".invs" ).addClass( "hid" );
                  
                      jQuery(this).prop('Counter',0).animate({
                      Counter: jQuery(this).text()
                      }, {
                      duration: 1000,
                      easing: 'swing',
                      step: function (now) {
                      jQuery(this).text(Math.ceil(now));
                      }
                      });
                      });
                   // Unbind scroll event
                  
                  }
                  
                  });
                  
                  jQuery(window).on('scroll', function() {
                  jQuery(window).on('scroll');
                  });            
                  
                  
                  
                  
                  });
                  
                  
                  new WOW().init();
                 


                    $(".owl-carousel").owlCarousel({
   loop:true,
    margin:10,
      items:3,
      arrow:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        640:{
            items:2,
            nav:true,
            arrow:true,
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
            arrow:true,
        }
    }
  });
                  
                  
                    
                  