

var map = L.map('map').setView([9.6303, 6.6587], 6);


var my_osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

my_osm.addTo(map)

map.addEventListener('click', e=>console.log(e.latlng))

fetch("./crimes.geojson")
.then(response => {
   return response;
})
.then(data => L.geoJSON(data).addTo(map));

	