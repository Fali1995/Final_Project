var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 10
});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

url = "https://raw.githubusercontent.com/Fali1995/Final_Project/master/resources/map_data.csv";

d3.csv(url, function(error, data) {
  if (error) return console.warn(error);
  console.log("TEST");
  console.log(data[0]);

  var heatArray = []

  for (var i = 0; i < 100000; i++) {
    data[i].Longitude = +data[i].Longitude;
    data[i].Latitude = +data[i].Latitude;
  }
  // console.log(data[0]);

  for (var k = 0; k < 100000; k++) {
    // L.circle([data[k].Latitude, data[k].Longitude], {
    //   radius: 100
    // }).addTo(myMap);
    console.log(data[k].Latitude)
    heatArray.push([data[k].Latitude, data[k].Longitude]);
  }

    var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(myMap);
});
