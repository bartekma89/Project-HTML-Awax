(function($) {
	$('#nav-toggle').click(function(event) {
		event.preventDefault();

		this.classList.toggle('active');

		$('.nav-content').slideToggle();
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('#backToTop').addClass('show');
		} else {
			$('#backToTop').removeClass('show');
		}
	});

	$('#backToTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 2000);
	});

	/////

	goTo('#nav-home', '#header', 1000);
	goTo('#nav-about', '#about', 1100);
	goTo('#nav-services', '#services', 1200);
	goTo('#nav-projects', '#projects', 1300);
	goTo('#nav-team', '#team', 1400);
	goTo('#nav-clients', '#opinions', 1500);
	goTo('#nav-price', '#price', 1600);
	goTo('#nav-facts', '#facts', 1700);
	goTo('#nav-contact', '#contact', 1800);

	function goTo(elementClick, elementFind, time) {
		$(elementClick).on('click', function(e) {
			$('html').animate(
				{
					scrollTop: $(elementFind).offset().top,
				},
				time
			);
			$('.nav-content').hide();
			$('#nav-toggle').removeClass('active');
		});
	}
})(jQuery);
