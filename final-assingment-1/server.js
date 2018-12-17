var express = require('express'), // npm install express
    app = express();
const { Pool } = require('pg');
var AWS = require('aws-sdk');
const moment = require('moment-timezone'); // moment-timezone --save


// AWS RDS credentials
var db_credentialsTwo = new Object();
db_credentialsTwo.user = 'herrj636';
db_credentials.password = process.env.AWSRDS_HOSTTWO;
db_credentialsTwo.database = 'aaDatabase';
db_credentials.password = process.env.AWSRDS_PWTWO;
db_credentialsTwo.port = 5432;

// create templates
var hx = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AA Meetings Map</title>
  <meta name="description" content="Meetings of AA in Manhattan">
  <meta name="Juan Herrera" content="AA">
  <link rel="stylesheet" href="styles.css?v=1.0">
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
   integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
   crossorigin=""/>
</head>
<body>
<h2>AA Meetings in New York, New York</h2>
<div id="mapid"></div>
  <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
   integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
   crossorigin=""></script>
  <script>
  var data = `;

var jx = `;
    var mymap = L.map('mapid').setView([40.734636,-73.994997], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiaGVycmo2MzYiLCJhIjoiY2pwNHo3d3Z1MG13eDN2cGp2Zmpma2kwciJ9.-vFG4rDskuh0Zttsvm6njA' 
    }).addTo(mymap);
    // console.log(data)
    console.log(data[1].json_agg[0].address, data[1].json_agg[0].name)
    for (var i=0; i<data.length; i++) {
        // console.log(data[i].json_agg[0].address, data[i].json_agg[0].name)
        L.marker( [data[i].lat, data[i].long] ).bindPopup('"' + data[i].lat + '", "' + data[i].long + '", "' + data[i].json_agg[0].address + '", "' + data[i].json_agg[0].name + '"').addTo(mymap);
    }
    </script>
    </body>
    </html>`;

// respond to requests for /aameetings
app.get('/aameetings', function(req, res) {

    var now = moment.tz(Date.now(), "America/New_York");
    var dayy = now.day().toString();
    var hourr = now.hour().toString();

    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentialsTwo);


    //MY QUERY
    var thisQuery = `SELECT lat, long, json_agg(json_build_object('address', address, 'name', title))
               FROM aalocations 
               GROUP BY lat, long
               ;`;

    // SQL query 
    // var thisQuery = `SELECT lat, lon, json_agg(json_build_object('loc', mtglocation, 'address', mtgaddress, 'time', tim, 'name', mtgname, 'day', day, 'types', types, 'shour', shour)) as meetings
    //              FROM aalocations 
    //              WHERE day = ` + dayy + 'and shour >= ' + hourr + 
    //              `GROUP BY lat, lon
    //              ;`;

    client.query(thisQuery, (qerr, qres) => {
        if (qerr) { throw qerr }

        else {
            var resp = hx +
                // console.log(JSON.stringify(qres.rows))
                JSON.stringify(qres.rows) +
                jx;
            res.send(resp);
            client.end();
            console.log('2) responded to request for aa meeting data');
        }
    });
});


// APP LOCAL LAUNCH--------------------------------------//

// serve static files in /public
app.use(express.static('public'));

// listen on port 8080
app.listen(8080, function() {
    console.log('Server listening...');
});

//----------------------------------------------------------------//

