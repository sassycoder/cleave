'use strict';

$(function() {
	var $carousel = $('.carousel'),
			iframe = $('#vimeoplayer')[0],
      vid = $f(iframe), //froogaloop for vimeo api (https://github.com/vimeo/player-api/tree/master/javascript)

			handleNav = function (e) {
				$('body').toggleClass('menu-open');
				e.preventDefault();
			},

			slideTextPos = function (slider) {
			  var $this = $(slider.currentTarget),
						imgHeight = $this.find('.slick-current img').height();

				$this.find('.slick-dots').css('top', (imgHeight - 33) + 'px');
			},
			handleVid = function () {
				$('#videoModal').on('hide.bs.modal', function () {
				  vid.api('pause');
				});
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

  // Init carousel (http://kenwheeler.github.io/slick/)
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

  //When clicking on carousel, goto next slide
  $('.slick-initialized').on('click', '.slick-slide img', function () {
		$carousel.slick('slickNext');
  });

  //pause video when modal closes
   vid.addEvent('ready', function() {
		handleVid();
   });

  //hide menu on screen resize
	$(window).on('resize', function () {
		$('body').removeClass('menu-open');
	});
});