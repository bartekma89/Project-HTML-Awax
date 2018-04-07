$(function() {
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
