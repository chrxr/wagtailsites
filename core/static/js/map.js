function initialize() {
	var a = 0
	var locationsData = document.getElementsByClassName("map_point");
	var coordsList = [];
	for (var i = 0; i < locationsData.length; i++) {
		console.log(i)
		var lat = locationsData[i].dataset.lat,
			lon = locationsData[i].dataset.lon,
			label = locationsData[i].dataset.maplabel,
			maploc = [lat, lon, label];
			console.log(maploc)
		coordsList.push(maploc);

	};	
	var	location = coordsList[a], 
		lat = location[0], 
		lng = location[1],
		place = new google.maps.LatLng(lat, lng);
	var mapOptions = {
	  center: place,
	  zoom: 7
	};
	var textArea = document.getElementById("map-text");
	textArea.innerHTML = location[2];
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	buildMarkers(coordsList, map);
	var buttonLeft = document.getElementById("button-left"), 
		buttonRight = document.getElementById("button-right");
	buttonLeft.addEventListener("click", function(){a = moveMap(map, coordsList, a, "left", textArea)}, "false");
	buttonRight.addEventListener("click", function(){a = moveMap(map, coordsList, a, "right", textArea)}, "false");
}

function buildMarkers(coords, map){
	for (var i = coords.length - 1; i >= 0; i--) {
		var location = coords[i], lat = location[0], lng = location[1],
			place = new google.maps.LatLng(lat, lng);
		var marker = new google.maps.Marker({
		  position: place,
		  map: map,
		  title: location[2]
		});
	};
}

function moveMap(map, coords, a, direction, textArea) {
	if (direction == "left") {
		a--;
		if (!coords[a]) {
			a = coords.length-1
		}
		changeLocation();
		return a;
	}
	else {
		a++;
		if (!coords[a]) {
			a = 0;
		}
		changeLocation();
		return a;
	}
	function changeLocation() {
		var location = coords[a], 
			lat = location[0], 
			lng = location[1],
			place = new google.maps.LatLng(lat, lng);
		textArea.innerHTML = location[2];
		map.panTo(place);
	}
}

google.maps.event.addDomListener(window, 'load', initialize);