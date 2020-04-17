$(document).ready(function() {
  var $body = document.querySelector('body'),
      burger = document.querySelector('.burger'),
      overlay = document.querySelector('.mobile-menu__overlay'),
      widthMobile = window.matchMedia('(max-width: 1024px)'); // media query list

  $('body').removeClass('nojs')

  // чтобы присваивал класс только если мобильное разрешение
  function pageStarted() {
    if (widthMobile.matches) {
      $('body').addClass('menu--closed');
    }
  };
  // присвоит класс при изменении мобильном размере, иначе удалит все классы
  function checkWidth(e) {
    if (e.matches) {
      $('body').addClass('menu--closed');
    }
    else {
      $('body').removeClass('menu--closed'),
      $('body').removeClass('menu--opened');
      $('.mobile-menu__overlay').removeClass('mobile-menu__overlay--opened');
    }
  };

  // следит за изменением размера окна
  widthMobile.addListener(checkWidth);
  pageStarted();

  $('.burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('burger--opened');
    $('.mobile-menu__overlay').toggleClass('mobile-menu__overlay--opened');
  });

  burger.addEventListener('click', function() {
    if ($body.classList.contains('menu--closed')) {
      $body.classList.remove('menu--closed');
      $body.classList.add('menu--opened');
    } else {
      $body.classList.add('menu--closed');
      $body.classList.remove('menu--opened');
    }
  });

  overlay.addEventListener('click', function() {
    $body.classList.add('menu--closed');
    $body.classList.remove('menu--opened');
    burger.classList.remove('burger--opened');
    overlay.classList.remove('mobile-menu__overlay--opened');
  });
});