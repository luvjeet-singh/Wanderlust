// Initialize the map
var map = L.map("map").setView(coordinates, 13); // (latitude, longitude), zoom

// Set the tile layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Add a marker (optional)
L.marker(coordinates)
  .addTo(map)
  .bindPopup("Exact location will be provided after booking")
  .openPopup();
