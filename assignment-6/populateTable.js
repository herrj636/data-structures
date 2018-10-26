
const { Client } = require('pg');
var async = require('async');

// ENDPOINT: db.cumu7khhlm3w.us-east-2.rds.amazonaws.com
// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'herrj636'; //182
// db_credentials.host = 'dsdemo.c2g7qw1juwkg.us-east-1.rds.amazonaws.com';
// db_credentials.host = 'mydb.ce54cjiwuvvo.us-east-1.rds.amazonaws.com';
db_credentials.host = 'db2.cumu7khhlm3w.us-east-2.rds.amazonaws.com'; // had to create it twice.
db_credentials.database = 'aaDatabaseTwo';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// var addressesForDb = [ { address: '63 Fifth Ave, New York, NY', latLong: { lat: 40.7353041, lng: -73.99413539999999 } }, { address: '16 E 16th St, New York, NY', latLong: { lat: 40.736765, lng: -73.9919024 } }, { address: '2 W 13th St, New York, NY', latLong: { lat: 40.7353297, lng: -73.99447889999999 } } ];
var addressesForDb = [{"oldaddress":"20 Cardinal Hayes Place","lat":"40.7132514","lon":"-74.002398","adrMeta":["Rectory Basement","Between Duane and Pearl St."],"title":"St Andrews Church","wheelchair":false,"meetings":[["Thursdays","7:00 AM","8:00 AM","OD"],["Tuesdays","7:00 AM","8:00 AM","Op"]]},{"oldaddress":"20 Cardinal Hayes Place","lat":"40.7147965","lon":"-73.9990363","adrMeta":["Enter through driveway behind Church."],"title":"St. Andrew's Church","wheelchair":false,"meetings":[["Mondays","12:15 PM","1:15 PM","OD"],["Wednesdays","12:15 PM","1:15 PM","Op"],["Thursdays","12:15 PM","1:15 PM","S"],["Fridays","12:15 PM","1:15 PM","B"]]},{"oldaddress":"29 Mott St.","lat":"40.7132514","lon":"-74.002398","adrMeta":["Basement"],"title":"Church of the Transfiguration","wheelchair":false,"meetings":[["Tuesdays","6:30 PM","7:30 PM","C"]]},{"oldaddress":"49 Fulton St.","lat":"40.7147965","lon":"-73.9990363","adrMeta":["1st Floor Library"],"title":"St. Margaret's Residence","wheelchair":true,"meetings":[["Mondays","7:00 PM","8:00 PM","OD"]]},{"oldaddress":"44 John St.","lat":"40.7132514","lon":"-74.002398","title":"","wheelchair":false,"meetings":[["Mondays","12:15 PM","1:15 PM","OD"],["Tuesdays","12:15 PM","1:15 PM","Op"],["Thursdays","12:15 PM","1:15 PM","S"],["Mondays","1:30 PM","2:30 PM","OD"],["Thursdays","1:30 PM","2:30 PM","Op"]]},{"oldaddress":"49 Fulton St.","lat":"40.7147965","lon":"-73.9990363","title":"","wheelchair":true,"meetings":[["Mondays","6:30 AM","7:30 AM","C"],["Tuesdays","6:30 AM","7:30 AM","Sp"],["Wednesdays","6:30 AM","7:30 AM","C"],["Thursdays","6:30 AM","7:30 AM","C"],["Fridays","6:30 AM","7:30 AM","Sp"],["Mondays","7:30 AM","8:30 AM","S"],["Tuesdays","7:30 AM","8:30 AM","BB"],["Wednesdays","7:30 AM","8:30 AM","S"],["Thursdays","7:30 AM","8:30 AM","OD"],["Fridays","7:30 AM","8:30 AM","Op"],["Sundays","7:45 AM","8:45 AM","OD"],["Saturdays","7:45 AM","8:45 AM","Op"],["Fridays","5:30 PM","6:30 PM","OD"]]}];

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aaDatabaseTwo VALUES (" + value.oldaddress + ", " + value.lat + ", " + value.lon + ", " + value.wheelchair +");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 



