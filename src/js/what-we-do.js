'use strict';

$(document).ready(function() {
  let wWide = window.matchMedia('(min-width: 1201px)'),
      wDesktope = window.matchMedia('(min-width: 1025px) and (max-width: 1200px)'),
      wTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)'),
      wMobile = window.matchMedia('all and (max-width: 768px)');
  
  function pageStartedWhatWeDo() {
    if (wWide.matches) {   
      $('.what-we-do__item').css('padding-left', $('.container--wide').offset().left + 210);
      $('.what-we-do__all-services').css('padding-left', $('.container--wide').offset().left + 210);
    } else if (wDesktope.matches) {
      $('.what-we-do__item').css('padding-left', $('.container--middle').offset().left + 50);
      $('.what-we-do__all-services').css('padding-left', $('.container--middle').offset().left + 50);
    } else if (wTablet.matches) {
      $('.what-we-do__item').css('padding-left', '32px');
      $('.what-we-do__all-services').css('padding-left', '32px');
    } else if (wMobile.matches) {
      $('.what-we-do__item').css('padding-left', '20px');
      $('.what-we-do__all-services').css('padding-left', '20px');
    }
  };
  //---------------------------------------------
  $('.what-we-do__link').on('mousemove', function() {
    $('.what-we-do__link').removeClass('chosen-link');
    $('.what-we-do__item').removeClass('chosen-item');
    $(this).addClass('chosen-link');
    $('.what-we-do__link').each(function(i) {
      if ($(this).hasClass('chosen-link')) {
        $('.what-we-do__item'+'.jsn-' + i++).addClass('chosen-item');
      }
    });
  });

  $('.what-we-do__link').on('focus', function() {
    $('.what-we-do__link').removeClass('chosen-link');
    $('.what-we-do__item').removeClass('chosen-item');
    $(this).addClass('chosen-link');
    $('.what-we-do__link').each(function(i) {
      if ($(this).hasClass('chosen-link')) {
        $('.what-we-do__item'+'.jsn-' + i++).addClass('chosen-item');
      }
    });
  });

  pageStartedWhatWeDo();
  $(window).resize(pageStartedWhatWeDo);
});