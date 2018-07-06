'use strict';

import polyfills from './libraries/polyfills';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
    
    //////TABS//////////
    $(document).ready(function(){
      $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
          
        if(nextImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          nextImg.addClass('active').css('z-index', 10);
        }
          
        var currentP = $('.active');
        var nextP = currentP.next();
          
        if(nextP.length){
          currentP.removeClass('active').css('z-index', -10);
          nextP.addClass('active').css('z-index', 10);
        }
      });

      $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          prevImg.addClass('active').css('z-index', 10);
        }
          
        var currentP = $('.active');
        var prevP = currentP.prev();

        if(prevP.length){
          currentP.removeClass('active').css('z-index', -10);
          prevP.addClass('active').css('z-index', 10);
        }
      });
    });
    
    $.ionTabs("#tabs_1", "#tabs_2", "#tabs_3");
    
    $('a[rel*=leanModal]').leanModal();
});
