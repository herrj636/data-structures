var express = require('express'), // npm install express
    app = express();
const { Pool } = require('pg');
const port = 3000
var AWS = require('aws-sdk');

// AWS RDS credentials
var db_credentials = new Object();
db_credentials.user = 'juan';
db_credentials.password = process.env.AWSRDS_HOST;
db_credentials.database = 'dbsensor';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// AWS RDS credentials
var db_credentialsTwo = new Object();
db_credentialsTwo.user = 'herrj636';
db_credentials.password = process.env.AWSRDS_HOSTTWO;
db_credentialsTwo.database = 'aaDatabase';
db_credentials.password = process.env.AWSRDS_PWTWO;
db_credentialsTwo.port = 5432;

// AWS DynamoDB credentials
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-2";

// respond to requests for /sensor
app.get('/sensor', function(req, res) {

    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);

    // SQL query 
    var q = `SELECT * FROM sensorData;`;

    client.connect();
    client.query(q, (qerr, qres) => {
        if (qerr) { throw qerr }
        else {
            res.send(qres.rows);
            client.end();
            console.log('1) responded to request for sensor data');
        }
    });
});


// respond to requests for /aameetings
app.get('/aameetings', function(req, res) {
    console.log("hello")
    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentialsTwo);

    // SQL query 
    var thisQuery = `SELECT * FROM aalocations;`;

    client.query(thisQuery, (qerr, qres) => {
        if (qerr) { throw qerr }
        else {
            res.send(qres.rows);
            client.end();
            console.log('2) responded to request for aa meeting data');
        }
    });
});

// respond to requests for /deardiary
app.get('/deardiary', function(req, res) {

    // Connect to the AWS DynamoDB database
    var dynamodb = new AWS.DynamoDB();

    // DynamoDB (NoSQL) query
    var params = {
        TableName: "deardiary",
        KeyConditionExpression: "pk = :pk", // the query expression
        // ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
        //     "#tp" : "topic"
        // },
        ExpressionAttributeValues: { // the query values
            ":pk": { N: "1" },
            // ":date": {N: ("10042018")},
            // ":maxDate": {N: new Date("October 16, 2018").valueOf().toString()}
        }
    };

    dynamodb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        }
        else {
            res.send(data.Items);
            console.log('3) responded to request for dear diary data');
        }
    });

});

// serve static files in /public
app.use(express.static('public'));

// listen on port 8080
app.listen(port, () => console.log(`Example app listening on port ${port}!`));







