var request = require('request');
const { Client } = require('pg');

// PARTICLE PHOTON
// var device_id = process.env.PHOTON_ID;
// var access_token = process.env.PHOTON_TOKEN;
var device_id = process.env.PHOTON_ID;
var access_token = process.env.PHOTON_TOKEN;
var particle_variable = 'analogvalue';
var device_url = 'https://api.particle.io/v1/devices/' + device_id + '/' + particle_variable + '?access_token=' + access_token;

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'juan';
db_credentials.host = process.env.AWSRDS_EP;
db_credentials.database = 'dbsensor';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var getAndWriteData = function() {
    
    // Make request to the Particle API to get sensor values
    request(device_url, function(error, response, body) {
        
        // Store sensor value(s) in a variable
        var sv = JSON.parse(body).result;
        console.log(sv)

        // Connect to the AWS RDS Postgres database
        const client = new Client(db_credentials);
        client.connect();
 
        // var thisQuery = "SELECT * FROM sensorData;";
        // Construct a SQL statement to insert sensor values into a table
        var thisQuery = "INSERT INTO sensorData VALUES (CURRENT_TIMESTAMP(2), " + sv + ");";
        // console.log(sv_mod);
        // console.log(thisQuery); // for debugging
        // var thisQuery = "SELECT * FROM sensorData;";

        // Connect to the AWS RDS Postgres database and insert a new row of sensor values
        client.query(thisQuery, (err, res) => {
            console.log(err, res);
            client.end();
        });
    });
};

// write a new row of sensor data every five minutes
setInterval(getAndWriteData, 60000);