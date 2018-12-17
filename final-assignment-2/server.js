var express = require('express'), // npm install express
    app = express();
const { Pool } = require('pg');
var AWS = require('aws-sdk');
const moment = require('moment-timezone'); // moment-timezone --save


// AWS DynamoDB credentials
    // AWS DynamoDB credentials
    AWS.config = new AWS.Config();
    AWS.config.accessKeyId = process.env.AWS_ID;
    AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-2";

// respond to requests for /deardiary
app.get('/deardiary', function(req, res) {

    // Connect to the AWS DynamoDB database
    var dynamodb = new AWS.DynamoDB();

    // DynamoDB (NoSQL) query
    var params = {
        TableName: "deardiary",
        KeyConditionExpression: "#tp", // the query expression
        FilterExpression: "#tp between :startpk and :endpk",
        ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
             "#tp" : "pk"
        },
        ExpressionAttributeValues: { // the query values
            "startpk": 1,
            "endpk": 58
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
app.listen(8080, function() {
    console.log('Server listening...');
});

