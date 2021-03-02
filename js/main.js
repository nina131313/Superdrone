$(function() {
  $('.header__slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.video__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick__arrow slick__arrow--prev"><img src="images/left.png" alt="left" class="slick__img"></button>',
    nextArrow: '<button class="slick__arrow slick__arrow--next"><img src="images/right.png" alt="right" class="slick__img"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $('.preview__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick__arrow slick__arrow--prev"><img src="images/left.png" alt="left" class="slick__img"></button>',
    nextArrow: '<button class="slick__arrow slick__arrow--next"><img src="images/right.png" alt="right" class="slick__img"></button>',
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true
        }
      },
    ]
  });

  $(".header__scroll").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
  });
  
  $('.header__menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header__list').toggleClass('active');
  });

  wow = new WOW(
    {
    mobile: false,
    }
  )
  wow.init();
});