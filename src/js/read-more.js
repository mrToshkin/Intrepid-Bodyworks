'use strict';

$(document).ready(function() {
  $('.read-more__button').click(function() {
    let elem = $('.read-more__button').text();
    if (elem == 'Read more') {
      $('.read-more__dots').css('display', 'none');
      $('.read-more__button').text('Read less');
      $('.read-more__full').slideDown(200);
    } else {
      $('.read-more__dots').css('display', 'inline');
      $('.read-more__button').text('Read more');
      $('.read-more__full').slideUp(200);
    }
  });
  
  let widthMobile = window.matchMedia('(max-width: 768px)');

  function checkWidthReadMore(e) {
    if (e.matches) {
    } else {
      $('.read-more__dots').removeAttr('style');
      $('.read-more__full').removeAttr('style');
      $('.read-more__button').text('Read more');
    }
  };

  widthMobile.addListener(checkWidthReadMore);
});