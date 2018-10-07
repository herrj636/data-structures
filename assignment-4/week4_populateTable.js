const { Client } = require('pg');
var async = require('async');
var fs = require('fs');


// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'herrj636';
db_credentials.host = 'my-data-structures.cfuhtqfrbela.us-east-1.rds.amazonaws.com';
db_credentials.database = 'AAmeetings_data';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;


// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

var data = JSON.parse(fs.readFileSync('data/data.json'));

async.eachSeries(data, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.street + "', " + value.lat + ", " + value.lon + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 2000);
}); 


client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});

var thisQuery = "SELECT * FROM aalocations;";