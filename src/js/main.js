(function($) {
	$('#nav-toggle').click(function(event) {
		event.preventDefault();

		this.classList.toggle('active');

		$('.nav-content').slideToggle();
	});
})(jQuery);

/*(function() {
	var navToggle = document.querySelector('#nav-toggle');
	var navContent = document.querySelector('.nav-content');

	navToggle.addEventListener('click', function(event) {
		event.preventDefault();

		this.classList.toggle('active');

		if (navContent.style.display === 'block') {
			navContent.style.display = 'none';
		} else {
			navContent.style.display = 'block';
		}
	});
})();
*/
