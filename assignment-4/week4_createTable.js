const { Client } = require('pg');

// ENDPOINT: db.cumu7khhlm3w.us-east-2.rds.amazonaws.com
// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'herrj636';
db_credentials.host = 'db.cumu7khhlm3w.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aaDatabase';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// var addressesForDb = [{"oldaddress":"20 Cardinal Hayes Place","new address":"20 CARDINAL HAYES PL New York NY ","lat":"40.7132514","lon":"-74.002398","adrMeta":["Rectory Basement","Between Duane and Pearl St"],"title":"St Andrews Church","wheelchair":false,"meetings":["Thursdays","7:00 AM","8:00 AM","OD"]},{"oldaddress":"20 Cardinal Hayes Place","new address":"20 CARDINAL HAYES PL New York NY ","lat":"40.7132514","lon":"-74.002398","adrMeta":["Rectory Basement","Between Duane and Pearl St."],"title":"St Andrews Church","wheelchair":false,"meetings":["Tuesdays","7:00 AM","8:00 AM","Op"]},{"oldaddress":"20 Cardinal Hayes Place","new address":"20 CARDINAL HAYES PL New York NY ","lat":"40.7132514","lon":"-74.002398","adrMeta":["Enter through driveway behind Church."],"title":"St. Andrew's Church","wheelchair":false,"meetings":["Mondays","12:15 PM","1:15 PM","OD"]},{"oldaddress":"20 Cardinal Hayes Place","new address":"20 CARDINAL HAYES PL New York NY ","lat":"40.7132514","lon":"-74.002398","adrMeta":["Enter through driveway behind Church."],"title":"St. Andrew's Church","wheelchair":false,"meetings":["Wednesdays","12:15 PM","1:15 PM","Op"]},{"oldaddress":"20 Cardinal Hayes Place","new address":"20 CARDINAL HAYES PL New York NY ","lat":"40.7132514","lon":"-74.002398","adrMeta":["Enter through driveway behind Church."],"title":"St. Andrew's Church","wheelchair":false,"meetings":["Thursdays","12:15 PM","1:15 PM","S"]},{"oldaddress":"20 Cardinal Hayes Place","new address":"20 CARDINAL HAYES PL New York NY ","lat":"40.7132514","lon":"-74.002398","adrMeta":["Enter through driveway behind Church."],"title":"St. Andrew's Church","wheelchair":false,"meetings":["Fridays","12:15 PM","1:15 PM","B"]}];
var addressesForDb = JSON.parse(fs.readFileSync('data/finalCompiledData.json'));
console.log(addressesForDb)

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var cleanTitle = value.title.replace(/\'/g,"");
    console.log(cleanTitle)

    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.oldaddress + "', " + value.lat + ", " + value.lon + ", '{" + value.adrMeta + "}',  '" + cleanTitle + "', " + value.wheelchair + ", '{" + value.meetings + "}');"; 
    console.log(thisQuery)
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 
