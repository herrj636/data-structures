var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');

var apiKey = process.env.NEW_VAR;

var meetingsData = [];

var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/m06.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

var meetingsData = [];

// print (to the console) names of thesis students
$('td').each(function(i, elem) {
    if ($(elem).attr("style") == "border-bottom:1px solid #e3e3e3; width:260px") {
        $(elem).find('h4,b,br,div,span,img').remove();
        var text = $(elem).text().replace(/[\t\n]+/g, '').replace(/ +/g, " ").trim()
        text = text.replace('Street', 'St');
        text = text.replace('Avenue', 'Ave');
        text = text.substring(0, text.indexOf(','));

        meetingsData.push(text)
}});

var cleanUp = meetingsData.map(function (meetingsData) {
    if (meetingsData.includes('-')){
        return '4 West 76th St'
    }
    if (meetingsData.includes('.')){
        return meetingsData.substring(0, meetingsData.indexOf('.'))
    }
    else {
        return meetingsData;
    }
});

// console.log(cleanUp)

fs.writeFileSync('data/m06_parsed.json', JSON.stringify(cleanUp));



var addresses = cleanUp;
var meetingsData = [];

async.eachSeries(addresses, function(value, callback, last) {
    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
    apiRequest += 'streetAddress=' + value.split(' ').join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
    apiRequest += '&format=json&version=4.01';
    
    // console.log(apiKey)
    // console.log(apiRequest);
    // var thisMeeting = new Object;
    // thisMeeting.address = value;
    
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        console.log('Connected')
        var tamuGeo = JSON.parse(body);
        var arrData = [] 
        sa = tamuGeo["InputAddress"]["StreetAddress"];
        console.log(tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Latitude"]);
        lat = tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Latitude"];
        lon = tamuGeo["OutputGeocodes"][0]["OutputGeocode"]["Longitude"];
        var obj0 = {"street":sa,"lat":lat,"lon":lon}
        return meetingsData.push(obj0)
    });
    
    setTimeout(callback, 2000);
    
}, function() {
    // fs.appendFileSync('data.json', ']');
    console.log("DONE");
    console.log(meetingsData);
    fs.appendFileSync('tamuData06.json', JSON.stringify(meetingsData));
});

fs.writeFileSync('tamuData06.json', '[');