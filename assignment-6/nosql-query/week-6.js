// npm install aws-sdk
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-2";

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "deardiary",
    KeyConditionExpression: "pk = :date", // the query expression
    // ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
    //     "#tp" : "topic"
    // },
    ExpressionAttributeValues: { // the query values
        // ":topicName": {S: "work"},
        ":date": {N: ("10042018")},
        // ":maxDate": {N: new Date("October 16, 2018").valueOf().toString()}
    }
};

dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});