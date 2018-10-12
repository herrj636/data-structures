
var AWS = require('aws-sdk');
var async = require('async');

AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var diaryEntries = getData();

async.eachSeries(diaryEntries, function(value, callback) {
        var params = {};
        params.Item = value; 
        params.TableName = "deardiary";
        
        dynamodb.putItem(params, function (err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        });
    setTimeout(callback, 1000); 
}); 

function getData() {
 return  [ { 'pk': { 'N': '0' }, 'date': { 'S': 'Thu Oct 11 2018' }, 'time': { 'N': '1941' }, 'price': { 'N': '4' }, 'drink': { 'S': 'beer' }, 'liquor': { 'S': 'beer' }, 'drinkName': { 'S': 'Sam Adams' }, { 'pk': { 'N': '1' }, 'date': { 'S': 'Thu Oct 11 2018' }, 'time': { 'N': '2017' }, 'price': { 'N': '4' }, 'drink': { 'S': 'beer' }, 'liquor': { 'S': 'beer' }, 'drinkName': { 'S': 'Sam Adams' }, { 'pk': { 'N': '2' }, 'date': { 'S': 'Thu Oct 11 2018' }, 'time': { 'N': '2103' }, 'price': { 'N': '4' }, 'drink': { 'S': 'beer' }, 'liquor': {'S': 'beer' }, 'drinkName': { 'S': 'Bud Light' } ];
}