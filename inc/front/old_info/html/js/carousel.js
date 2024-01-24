/*===================================
Author       : Bestwebcreator.
Template Name: Anger - Creative Business & Portfolio Multi-purpose HTML5 Template
Version      : 2.0
===================================*/

/*===================================*
PAGE JS
*===================================*/

(function ($) {
	'use strict';
	/*===================================*
	05. SLIDER JS
	*===================================*/
	$(window).on("load", function () {
		$('.portfolio_slider,.carousel_slide1').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots: $carousel.data("dots"),
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				items: 1,
				autoHeight: $carousel.data("autoheight"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplay: $carousel.data("autoplay"),
				animateIn: $carousel.data("animate-in"),
				animateOut: $carousel.data("animate-out"),
				autoplayTimeout: $carousel.data("autoplay-timeout"),
			});
		});

		var owl = $('.owl-thumbs-slider');
		owl.owlCarousel({
			loop: false,
			items: 4,
			dots: false,
			margin: 10,
			nav: true,
			thumbs: true,
			navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
		});

		$('.carousel_slide2').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				dots: $carousel.data("dots"),
				autoHeight: true,
				center: $carousel.data("center"),
				rewind: $carousel.data("rewind"),
				autoplay: $carousel.data("autoplay"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				responsive: {
					0: {
						items: 1,
					},
					380: {
						items: 1,
					},
					576: {
						items: 2,
					},
					1000: {
						items: 2,
					},
					1199: {
						items: 2
					}
				}
			});
		});

		$('.carousel_slide3').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				dots: $carousel.data("dots"),
				autoHeight: true,
				center: $carousel.data("center"),
				rewind: $carousel.data("rewind"),
				autoplay: $carousel.data("autoplay"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				responsive: {
					0: {
						items: 1,
					},
					380: {
						items: 1,
					},
					576: {
						items: 2,
					},
					1000: {
						items: 3,
					},
					1199: {
						items: 3
					}
				}
			});
		});

		$('.carousel_slide4').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots: $carousel.data("dots"),
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				autoHeight: true,
				center: $carousel.data("center"),
				rewind: $carousel.data("rewind"),
				autoplay: $carousel.data("autoplay"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				responsive: {
					0: {
						items: 1,
					},
					380: {
						items: 1,
					},
					576: {
						items: 2,
					},
					1000: {
						items: 3,
					},
					1199: {
						items: 4
					}
				}
			});
		});

		$('.carousel_slide5').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots: $carousel.data("dots"),
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				autoHeight: true,
				center: $carousel.data("center"),
				rewind: $carousel.data("rewind"),
				autoplay: $carousel.data("autoplay"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				responsive: {
					0: {
						items: 1,
					},
					380: {
						items: 1,
					},
					576: {
						items: 3,
					},
					1000: {
						items: 4,
					},
					1199: {
						items: 5
					}
				}
			});
		});

		$('.cl_logo_slider').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots: $carousel.data("dots"),
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				autoHeight: true,
				rewind: $carousel.data("rewind"),
				autoplay: $carousel.data("autoplay"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				responsive: {
					0: {
						items: 2,
					},
					380: {
						items: 3,
					},
					600: {
						items: 4,
					},
					1000: {
						items: 5,
					},
					1199: {
						items: 6
					}
				}
			});
		});

		$('.cl_logo_slider5').each(function () {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots: $carousel.data("dots"),
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				autoHeight: true,
				rewind: $carousel.data("rewind"),
				autoplay: $carousel.data("autoplay"),
				nav: $carousel.data("nav"),
				navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				responsive: {
					0: {
						items: 2,
					},
					380: {
						items: 2,
					},
					600: {
						items: 3,
					},
					1000: {
						items: 4,
					},
					1199: {
						items: 5
					}
				}
			});
		});
	});

	$('.carousel_slider').each(function () {
		var $carousel = $(this);
		$carousel.owlCarousel({
			dots: $carousel.data("dots"),
			loop: $carousel.data("loop"),
			items: $carousel.data("items"),
			margin: $carousel.data("margin"),
			mouseDrag: $carousel.data("mouse-drag"),
			touchDrag: $carousel.data("touch-drag"),
			autoHeight: $carousel.data("autoheight"),
			center: $carousel.data("center"),
			nav: $carousel.data("nav"),
			rewind: $carousel.data("rewind"),
			navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
			autoplay: $carousel.data("autoplay"),
			animateIn: $carousel.data("animate-in"),
			animateOut: $carousel.data("animate-out"),
			autoplayTimeout: $carousel.data("autoplay-timeout"),
			smartSpeed: $carousel.data("smart-speed"),
			responsive: $carousel.data("responsive")
		});
	});


	var $sync1 = $("#slider_img"),
		$sync2 = $("#thumb_img"),
		duration = 300;
	$sync1.owlCarousel({
		items: 1,
		dots: $sync1.data("dots"),
		loop: false,
		margin: $sync1.data("margin"),
		mouseDrag: $sync1.data("mouse-drag"),
		touchDrag: $sync1.data("touch-drag"),
		autoHeight: $sync1.data("autoheight"),
		center: $sync1.data("center"),
		nav: $sync1.data("nav"),
		rewind: $sync1.data("rewind"),
		navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
		autoplay: $sync1.data("autoplay"),
		animateIn: $sync1.data("animate-in"),
		animateOut: $sync1.data("animate-out"),
		autoplayTimeout: $sync1.data("autoplay-timeout"),
		smartSpeed: $sync1.data("smart-speed"),
		responsive: $sync1.data("responsive")
	}).on('changed.owl.carousel', function (e) {
		var syncedPosition = syncPosition(e.item.index);
		if (syncedPosition != "stop") {
			$sync2.trigger('to.owl.carousel', [syncedPosition, duration, true]);
		}
	});
	$sync2.on('initialized.owl.carousel', function () {
		addClassCurrent(0);
	}).owlCarousel({
		dots: $sync2.data("dots"),
		loop: false,
		items: $sync2.data("thumbs-items"),
		margin: $sync2.data("margin"),
		mouseDrag: $sync2.data("mouse-drag"),
		touchDrag: $sync2.data("touch-drag"),
		autoHeight: $sync2.data("autoheight"),
		center: $sync2.data("center"),
		nav: $sync2.data("nav"),
		rewind: $sync2.data("rewind"),
		navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
		autoplay: $sync2.data("autoplay"),
		animateIn: $sync2.data("animate-in"),
		animateOut: $sync2.data("animate-out"),
		autoplayTimeout: $sync2.data("autoplay-timeout"),
		smartSpeed: $sync2.data("smart-speed"),
		responsive: $sync2.data("responsive")
	}).on('click', '.owl-item', function () {
		$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
	});

	function addClassCurrent(index) {
		$sync2.find(".owl-item").removeClass("active-item").eq(index).addClass("active-item");
	}

	function syncPosition(index) {
		addClassCurrent(index);
		var itemsNo = $sync2.find(".owl-item").length;
		var visibleItemsNo = $sync2.find(".owl-item.active").length;
		if (itemsNo === visibleItemsNo) {
			return "stop";
		}
		var visibleCurrentIndex = $sync2.find(".owl-item.active").index($sync2.find(".owl-item.active-item"));
		if (visibleCurrentIndex == 0 && index != 0) {
			return index - 1;
		}
		if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
			return index - visibleItemsNo + 2;
		}
		return "stop";
	}

	/*==============================================================
	12. FIT VIDEO JS
	==============================================================*/
	$(".fit-videos").fitVids();
})(jQuery);