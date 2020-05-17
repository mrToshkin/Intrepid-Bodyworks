$(document).ready(function() {
  $('.testimonials__slider').slick({
    dots: true,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $('.article__slider-body').slick({
    prevArrow: '.article__slider-nav--prev',
    nextArrow: '.article__slider-nav--next',
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true
        }
      }
    ]
  });
});