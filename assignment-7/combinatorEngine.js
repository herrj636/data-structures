var fs = require('fs');
var obj0 = JSON.parse(fs.readFileSync('data/HTMLscrape', 'utf8')) // outputLatLon
var obj1 = JSON.parse(fs.readFileSync('data/TAMUResponse', 'utf8')) // TAMU Response
var obj2 = []


obj0.forEach (function(element, i){
    console.log(element.address, i);
    console.log(obj1[i].lat);
    
    obj2.push({"oldaddress": element.address , "new address": obj1[i].streetAddress, "lat": obj1[i].lat, "lon": obj1[i].lon});
});


fs.writeFileSync('combinedData.json', JSON.stringify(obj2));