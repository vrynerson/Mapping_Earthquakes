// // We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY,
  id: "light-v10",
});

// tile layer for dark map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY,
  id: "dark-v10",
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
<<<<<<< HEAD
};.addTo(map);

=======
};
>>>>>>> e3cbd8b2138588f128264e6d514a3f009e83bad6

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [baseMaps]
<<<<<<< HEAD
}).addTo(map);
=======
})
>>>>>>> e3cbd8b2138588f128264e6d514a3f009e83bad6

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the aiport GeoJSON URL
<<<<<<< HEAD
let torontoData = "https://raw.githubusercontent.com/vrynerson/Mapping_Earthquakes/main/torontoRoutes.json";

// create style for the lines
let myStyle = {
  color: "#ffffa1",
  weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2>" + "Airline: " + `${feature.properties.airline}` + "</h2>" + "<hr>" + "<h3>" + "Destination: " + `${feature.properties.dst}` + "</h3>" );
  }}).addTo(map);
});
  

=======
let airportData = "https://raw.githubusercontent.com/vrynerson/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2>" + "Airport Code: " + `${feature.properties.faa}` + "</h2>" + "<hr>" + "<h3>" + "Aiport Name: " + `${feature.properties.name}` + "</h3>" );
  }}).addTo(map);
});
      
>>>>>>> e3cbd8b2138588f128264e6d514a3f009e83bad6
