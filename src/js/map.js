function initMap() {
	var uluru = { lat: -37.817061, lng: 144.955785 };
	var mapProp = {
		center: uluru,
		zoom: 17,
	};

	var map = new google.maps.Map(document.getElementById('map'), mapProp);

	var marker = new google.maps.Marker({
		map: map,
		position: uluru,
		animation: google.maps.Animation.DROP,
		draggable: true,
	});
	marker.addListener('click', toggleBounce);
}
