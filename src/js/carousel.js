/*$(function() {
	function forward() {
		var currentImg = $('.active-slide');
		var nextImg = currentImg.next();

		if (currentImg.length) {
			currentImg.removeClass('active-slide');
			nextImg.addClass('active-slide');
			if (nextImg.length === 0) {
				currentImg.removeClass('active-slide');
				$('.slide')
					.first()
					.addClass('active-slide');
			}
		} else {
			currentImg.removeClass('active-slide');
			$('.slide')
				.first()
				.addClass('active-slide');
		}
	}

	setInterval(forward, 3000);
});
*/

$(function() {
	var $slider = $('#slider');
	var $slides = $('#slider .slide-group');
	var $slideWidth = $slides.width();

	var seconds = 5;
	var delay = 8;

	var $controls = $('<div>').addClass('controls');
	$slider.after($controls);

	var slideClick = function() {
		var $this = $(this);
		$('.controls div').removeClass('current');
		this.addClass('current');
		var index = $this.index();
		$slides.css('left', -1 * index * $slideWidth);
	};

	$('#slider .slide-group .slide').each(function(i) {
		var $slide = $(this);
		$slide.css('left', i * $slideWidth);
		var $button = $('<div>');
		$controls.append($button);
		if (i === 0) {
			$button.addClass('current');
		}
		$button.click(function() {
			clearInterval(autoSlideInterval);
			slideClick.apply(this);
			setTimeout(function() {
				setInterval(autoSlide, seconds * 1000);
			}, delay * 1000);
		});
	});

	var autoSlide = function() {
		var $next = $('.controls .current').next();
		if ($next.length) {
			slideClick.apply($next);
		} else {
			var $first = $('.controls div').first();
			slideClick.apply($first);
		}
	};

	var autoSlideInterval = setInterval(autoSlide, seconds * 1000);
});
