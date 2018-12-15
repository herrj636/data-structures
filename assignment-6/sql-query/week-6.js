const { Client } = require('pg');
const cTable = require('console.table');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'herrj636';
db_credentials.host = 'db.cumu7khhlm3w.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aaDatabaseTwo';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

//Query Sample:
// (address varchar(200), lat double precision, long double precision, addrMeta Text [], title varchar(1000), wheelchair BOOLEAN NOT NULL, meetings Text []);";


// Sample SQL statement to query meetings on Monday that start on or after 7:00pm: 
var thisQuery = "SELECT address, lat, long, addrMeta, title FROM aalocations";



client.query(thisQuery, (err, res) => {
    if (err) {throw err}
    else {
        console.table(res.rows);
        client.end();
    }
});