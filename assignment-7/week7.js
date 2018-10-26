var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs'); // npm install file-system

var apiKey = '2235f06609484a63991cdbe8607549fb'

var data = JSON.parse(fs.readFileSync('data/outputLatLong.json'));

var addressArray = []

data.forEach(function(element) {
  return addressArray.push(element.address)
  // console.log(addressArray)
});

// Test to quickly run two addresses.
var testarray = ["20 Cardinal Hayes Place", "29 Mott St."];

var addresses = addressArray

var meetingsData = []
var i = 0

// async.eachSeries(addresses, function(value, callback, last) {
//     var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
//     apiRequest += 'streetAddress=' + value.split(' ').join('%20');
//     apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
//     apiRequest += '&format=json&version=4.01';

//     // console.log(apiKey)
//     // console.log(apiRequest);
//     // console.log(data)
    
//     request(apiRequest, function(err, resp, body) {
//         if (err) {throw err;}
//         console.log('Connected')
//         console.log(i)
//         var tamuGeo = JSON.parse(body);
//         sa = tamuGeo["InputAddress"]["StreetAddress"];
//         // console.log(tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Latitude"]);
//         lat = tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Latitude"];
//         lon = tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Longitude"];
//         var tamuObj = {"street":sa,"lat":lat,"lon":lon}
//         i++
//         return meetingsData.push(tamuObj)


//     });
//     setTimeout(callback, 1500);
// }, function() {
//     console.log("DONE");
//     // console.log(meetingsData);
//     fs.appendFileSync('data/tamuResponse.json', JSON.stringify(meetingsData));
//     setTimeout(function(){ cleanerUp(); }, 1500);
// });

// setTimeout(console.log(hello), 3000); 



//Combinator: will take html data and tamu response and compile it into one json file.
function cleanerUp(r){
    // fs.readFile('data/outputLatLongUpdate.json', function (err, data) {
    // var json = JSON.parse(data)
    // console.log(json[i].readFileSync('data/outputLatLong
    var obj0 = JSON.parse(fs.readFileSync('data/outputLatLong.json', 'utf8')) // outputLatLon
    var obj1 = JSON.parse(fs.readFileSync('data/tamuResponse.json', 'utf8')) // TAMU Response
    var obj2 = []


    obj0.forEach (function(element, i){
    console.log(element.address, i);
    // console.log(obj1[i].lat);
    
    obj2.push({"oldaddress": element.address , "new address": obj1[i].streetAddress, "lat": obj1[i].lat, "lon": obj1[i].lon, "adrMeta":element.adrMeta, "title":element.title, "wheelchair": element.wheelc, "meetings":element.meetings});
});


fs.writeFileSync('data/finalCompiledData.json', JSON.stringify(obj2));

}
 
 
 cleanerUp();
