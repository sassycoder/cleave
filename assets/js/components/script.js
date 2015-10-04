'use strict';

$(function() {
	var $carousel = $('.carousel'),

			handleNav = function (e) {
				$('body').toggleClass('menu-open');
				e.preventDefault();
			},

			slideTextPos = function (slider) {
			  var $this = $(slider.currentTarget),
						imgHeight = $this.find('.slick-current img').height();

				$this.find('.slick-dots').css('top', (imgHeight - 33) + 'px');
			};

	//toggle mobile menu
	$('.nav-btn').on('click', handleNav);

	//position nav dots on top of carousel
	$carousel.on('init', function (slick) {
		slideTextPos(slick);
	});

	//position nav dots on top of carousel
	$carousel.on('setPosition', function (slick){
		slideTextPos(slick);
	});

  // Init carousel
  $carousel.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 800,
    fade: true,
    dots: true,
    slide: '.slide',
    cssEase: 'linear'
  });

  //hide menu on screen resize
	$(window).on('resize', function () {
		$('body').removeClass('menu-open');
	});
});