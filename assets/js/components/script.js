'use strict';

		$(window).load(function() {

			var navBtn = $('.nav-btn'),
					//navlink = $('.nav-link'),
					//expBtn = $('.bttn-exp'),
					// expBtnText = $('.bttn-exp').text(),
					// techFrame,
					$window = $(window),
					// btnPlay = $('.vid-btn'),
					// btnText = btnPlay.text(),
					//poster = $('.vid-ph'),
					// iframe = $('#vid1')[0],
					// vid = $f(iframe),
					// vidPlaying = false,
					$carousel = $('.carousel'),
					//readMore = $('.read-more'),
					// $newsTemplate = $('.hbs-news-posts'),

					// handleScrollFn = function () {
					// 	if ($window.scrollTop() > 250) {
					//     header.addClass('fixed').removeClass('menu-open');
					//   } else {
					//     header.removeClass('fixed menu-open');
					//   }

					// 	// if ($window.scrollTop() > 580 && vidPlaying) {
					// 	// 	vid.api('pause');
					// 	// }
					// },

					handleNav = function (e) {
						$('body').toggleClass('menu-open');
						e.preventDefault();
					},

					slideTextPos = function (slider) {
					  var $this = $(slider.currentTarget),
								imgHeight = $this.find('.slick-current img').height();

						$this.find('.slick-dots').css('top', (imgHeight - 33) + 'px');
					};

					//$window.on('scroll', handleScrollFn);
					navBtn.on('click', handleNav);
					// navlink.on('click', handleNavLink);
					// $(header).scrollupbar();

					// handleScrollFn();

					$carousel.on('init', function (slick) {
						slideTextPos(slick);
					});

					$carousel.on('setPosition', function (slick){
						slideTextPos(slick);
					});

          // Init gallery
				  $carousel.slick({
				    slidesToShow: 1,
				    slidesToScroll: 1,
				    arrows: false,
				    swipe: true,
				    autoplay: true,
				    pauseOnHover: true,
				    autoplaySpeed: 60000,
				    infinite: true,
				    speed: 800,
				    fade: true,
				    dots: true,
				    slide: '.slide',
				    cssEase: 'linear'
				  });

				 

			$window.on('resize', function () {
				$('body').removeClass('menu-open');
			});
		});