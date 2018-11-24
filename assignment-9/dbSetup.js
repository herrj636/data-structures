const { Client } = require('pg');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'juan';
db_credentials.host = 'sensordb.cumu7khhlm3w.us-east-2.rds.amazonaws.com';
db_credentials.database = 'dbsensor';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
// var thisQuery = "CREATE TABLE sensorData ( sensorTime timestamp DEFAULT current_timestamp, sensorValue int );";
var thisQuery = "SELECT * FROM sensorData;";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});