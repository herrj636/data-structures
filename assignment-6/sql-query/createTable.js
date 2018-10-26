const { Client } = require('pg');

// ENDPOINT: db.cumu7khhlm3w.us-east-2.rds.amazonaws.com
// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'herrj636';
db_credentials.host = 'db2.cumu7khhlm3w.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aaDatabaseTwo';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;



// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
// var thisQuery = "CREATE TABLE aaDatabaseTwo (address varchar(200), lat double precision, long double precision, wheelchair BIT);";
// Sample SQL statement to delete a table: 
// var thisQuery = "DROP TABLE aaDatabaseTwo;"; 
// Sample SQL statement to query the entire contents of a table: 
var thisQuery = "SELECT * FROM aaDatabaseTwo;";
// Sample SQL statement to delete the entire contents of a table:
// var thisQuery = "DELETE FROM aalocations;";


client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});

var thisQuery = "SELECT * FROM aaDatabaseV2;";