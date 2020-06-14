

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
                 


                    $("#menu-carousel").owlCarousel({
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
                  
  
  // $(".banner-carousel").owlCarousel({
  //  stagePadding: 0,
  //   items: 1,
  //   loop:true,
  //   margin:0,
  //   singleItem:true,
  //   autoplay:true,
  //    animateOut: 'slideOutDown',
  //   animateIn: 'flipInX',

  // });                

   
           $(function () {
  var $owl = $('.banner-carousel'),
      effect = getAnimationName(),
      outIndex,
      isDragged = false;

  $owl.owlCarousel({
    loop:true,
    margin: 0,
    nav: false,
    autoplay:true,
    items: 1,
    animateIn: 'fake',
    animateOut: 'fake'
  });

  $owl.on('change.owl.carousel', function(event) {
    outIndex = event.item.index;
  });

  $owl.on('changed.owl.carousel', function(event) {
    var inIndex = event.item.index,
        dir = outIndex <= inIndex ? 'Next' : 'Prev';

    var animation = {
      moveIn: {
        item: $('.owl-item', $owl).eq(inIndex),
        effect: effect + 'In' + dir
      },
      moveOut: {
        item: $('.owl-item', $owl).eq(outIndex),
        effect: effect + 'Out' + dir
      },
      run: function (type) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            animationObj = this[type],
            inOut = type == 'moveIn' ? 'in' : 'out',
            animationClass = 'animated owl-animated-' + inOut + ' ' + animationObj.effect,
            $nav = $owl.find('.owl-prev, .owl-next, .owl-dot, .owl-stage');

        $nav.css('pointerEvents', 'none');

        animationObj.item.stop().addClass(animationClass).one(animationEndEvent, function () {
          // remove class at the end of the animations
          animationObj.item.removeClass(animationClass);
          $nav.css('pointerEvents', 'auto');
        });
      }
    };

    if (!isDragged){
      animation.run('moveOut');
      animation.run('moveIn');
    }
  });

  $owl.on('drag.owl.carousel', function(event) {
    isDragged = true;
  });

  $owl.on('dragged.owl.carousel', function(event) {
    isDragged = false;
  });

  /**
   * Get Animation Name from the class 'owl-carousel',
   * animation name begins with fx...
   */
  function getAnimationName(){
    var re = /fx[a-zA-Z0-9\-_]+/i,
        matches = re.exec($owl.attr('class'));

    return matches !== null ? matches[0] : matches;
  }


  /**
   * For Demo (Selectbox)
   * Change select options with animation name
   */
  $('#fxselect').on('change', function (e) {
    var $owlCarousel = $('.owl-carousel'),
        animationName = getAnimationName();
    effect = $(this).find('option:selected').val();

    //remove old root class
    if (animationName !== null){
      $owl.removeClass(animationName);
    }

    //add new root class
    $owlCarousel.addClass(effect);
  });
});       

         