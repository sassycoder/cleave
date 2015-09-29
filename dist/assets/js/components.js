'use strict';

		$(window).load(function() {

			var header = $('header'),
					navBtn = $('.nav-btn'),
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
						header.toggleClass('menu-open');
						//header.hasClass('fixed') ? {} : header.addClass('fixed');
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
			});
		});
this["Rhapsody"] = this["Rhapsody"] || {};
this["Rhapsody"]["Templates"] = this["Rhapsody"]["Templates"] || {};

this["Rhapsody"]["Templates"]["newspost"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div class=\"pane news-item\">\n	<a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\"><img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.attachments : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"news item\"></a>\n	<p class=\"news-date\">"
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"dateFormat","hash":{
    'format': ("MMMM Do, YYYY")
  },"data":data})))
    + "</p>\n	<p class=\"news-title\"><a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">";
  stack1 = lambda((depth0 != null ? depth0.title : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</a></p>\n	<div class=\"news-desc\">";
  stack1 = lambda((depth0 != null ? depth0.excerpt : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});