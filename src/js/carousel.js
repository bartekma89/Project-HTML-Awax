$(function() {
	var $slider = $('#slider');
	var $slides = $('#slider .slide-group');
	var $slideWidth = $slides.width();
	var $controls = $('.controls');
	var $button = $('.controls div');

	var seconds = 5;
	var delay = 8;

	var slideClick = function() {
		var $this = $(this);
		$('.controls div').removeClass('current');
		$this.addClass('current');
		var index = $this.index();
		$slides.css('left', -1 * index * $slideWidth);
	};

	var autoSlide = function() {
		var $next = $('.controls .current').next();
		if ($next.length) {
			slideClick.apply($next);
		} else {
			var $first = $('.controls div').first();
			slideClick.apply($first);
		}
	};

	$('#slider .slide-group .slide').each(function(i) {
		var $this = $(this);
		$this.css('left', i * $slideWidth);
		$button.click(function() {
			clearInterval(autoSlide);
			slideClick.apply(this);
			setTimeout(start, delay * 1000);
		});
	});

	function start() {
		setInterval(autoSlide, seconds * 1000);
	}

	setTimeout(start, delay * 1000);
});
