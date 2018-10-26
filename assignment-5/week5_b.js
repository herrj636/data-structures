
var AWS = require("aws-sdk");
var async = require("async");

AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_Key;
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
return [{"pk":{"N":"10112018"},"time":{"N":"1941"},"latlon":{"NS":["40.7370996","-73.9737431"]},"price":{"N":"4"},"drinkFm":{"S":"beer"},"liquor":{"S":"beer"},"brand":{"S":"Sam Adams"}},{"pk":{"N":"10112018"},"time":{"N":"2017"},"latlon":{"NS":["40.7370996","-73.9737431"]},"price":{"N":"4"},"drinkFm":{"S":"beer"},"liquor":{"S":"beer"},"brand":{"S":"Sam Adams"}},{"pk":{"N":"10112018"},"time":{"N":"2103"},"latlon":{"NS":["40.7370996","-73.9737431"]},"price":{"N":"4"},"drinkFm":{"S":"beer"},"liquor":{"S":"beer"},"brand":{"S":"Bud Light"}}]

}