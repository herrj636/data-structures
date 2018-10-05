const { Client } = require('pg');
var async = require('async');
var fs = require('fs');


// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'herrj636';
db_credentials.host = 'my-data-structures.cfuhtqfrbela.us-east-1.rds.amazonaws.com';
db_credentials.database = 'AAmeetings_data';
db_credentials.password = 'Laurita9010#';
db_credentials.port = 5432;



var data = JSON.parse(fs.readFileSync('data/data.json'));
// console.log(data);
// console.log(typeof(data))



// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
var thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);";
// Sample SQL statement to delete a table: 
// var thisQuery = "DROP TABLE aalocations;"; 
// Sample SQL statement to query the entire contents of a table: 
// var thisQuery = "SELECT * FROM aalocations;";
// Sample SQL statement to delete the entire contents of a table:
// var thisQuery = "DELETE FROM aalocations;";


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