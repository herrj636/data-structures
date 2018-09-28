var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');

// var apiKey = process.env.TAMU_KEY; 

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

        meetingsData.push(text + ', New York, NY')
}});

var cleanUp = meetingsData.map(function (meetingsData) {
    if (meetingsData.includes('-')){
        return '4 West 76th St, New York, NY'
    }
    if (meetingsData.includes('.')){
        return meetingsData.substring(0, meetingsData.indexOf('.'))
    }
    else {
        return meetingsData;
    }
});

console.log(cleanUp)

fs.writeFileSync('data/m06_parsed.txt', JSON.stringify(cleanUp));


















// var addresses = ["63 Fifth Ave", "16 E 16th St", "2 W 13th St"];

// // eachSeries in the async module iterates over an array and operates on each item in the array in series
// async.eachSeries(addresses, function(value, callback) {
//     var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
//     apiRequest += 'streetAddress=' + value.split(' ').join('%20');
//     apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
//     apiRequest += '&format=json&version=4.01';
    
//     request(apiRequest, function(err, resp, body) {
//         if (err) {throw err;}
//         else {
//             var tamuGeo = JSON.parse(body);
//             console.log(tamuGeo['FeatureMatchingResultType']);
//             meetingsData.push(tamuGeo);
//         }
//     });
//     setTimeout(callback, 2000);
// }, function() {
//     fs.writeFileSync('first.json', JSON.stringify(meetingsData));
//     console.log('*** *** *** *** ***');
//     console.log('Number of meetings in this zone: ');
//     console.log(meetingsData.length);
// });