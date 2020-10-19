'use strict';

$(document).ready(function() {
  $('.arrow-anchor').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#first-main-section').offset().top }, 1000);
    e.preventDefault();
  });
});