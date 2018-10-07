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

// Sample SQL statement to create a table: 
var thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);";
// Sample SQL statement to delete a table: 
// var thisQuery = "DROP TABLE aalocations;"; 
// Sample SQL statement to query the entire contents of a table: 
// var thisQuery = "SELECT * FROM aalocations;";
// Sample SQL statement to delete the entire contents of a table:
// var thisQuery = "DELETE FROM aalocations;";


client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});

var thisQuery = "SELECT * FROM aalocations;";