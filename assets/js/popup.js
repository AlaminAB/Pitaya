   
      // nav icon 
      jQuery('.navicon').on('click', function (e) {
        e.preventDefault();
        jQuery(this).toggleClass('navicon--active');
        jQuery('.toggle').toggleClass('toggle--active');
        
         });
      
      jQuery('.navicon').mouseleave(function(){
      jQuery(this).addClass("navicon--actived");
      });
      
      

      jQuery(document).ready(function(jQuery) {
        jQuery(".scroll").click(function(event){		
          event.preventDefault();
             //jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top},1000);
           });
           
         
      
        jQuery( ".link_liver" ).click(function() {
          jQuery(".toggle_liver").toggleClass("toggle_liver--active");
       jQuery(".link_liver").toggleClass("active");
          });
       
       jQuery( ".link_clikcol" ).click(function() {
          jQuery(".toggle_clickancollect").toggleClass("toggle_clickancollect--active");
        jQuery(".link_clikcol").toggleClass("active");
          });
       
      
          jQuery('#recipeCarousel').carousel({
       interval: 8000
      })
      
      
      jQuery('#recipeCarousel2').carousel({
       interval: 8000
      })
      
      
      jQuery('#recipeCarousel2 .carousel-item').each(function() {
       var minPerSlide = 4;
       var next = jQuery(this).next();
       if (!next.length) {
           next = jQuery(this).siblings(':first');
       }
       next.children(':first-child').clone().appendTo(jQuery(this));
      
       for (var i = 0; i < minPerSlide; i++) {
           next = next.next();
           if (!next.length) {
               next = jQuery(this).siblings(':first');
           }
      
           next.children(':first-child').clone().appendTo(jQuery(this));
       }
      });
      
      
      
      
      jQuery('#recipeCarousel').hover(function(){
      jQuery("#recipeCarousel").carousel('pause');
      },function(){
      jQuery("#recipeCarousel").carousel('cycle');
      });
      
      
      jQuery('#heroCarousel').hover(function(){
      jQuery("#heroCarousel").carousel('cycle');
      },function(){
      jQuery("#heroCarousel").carousel('cycle');
      });
      jQuery("#heroCarousel").carousel('cycle');
      
      jQuery('#recipeCarousel3 .carousel-item').each(function() {
       var minPerSlide = 4;
       var next = jQuery(this).next();
       if (!next.length) {
           next = jQuery(this).siblings(':first');
       }
       next.children(':first-child').clone().appendTo(jQuery(this));
      
       for (var i = 0; i < minPerSlide; i++) {
           next = next.next();
           if (!next.length) {
               next = jQuery(this).siblings(':first');
           }
      
           next.children(':first-child').clone().appendTo(jQuery(this));
       }
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
