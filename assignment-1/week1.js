
var request = require('request');
var fs = require('fs');
var fileNum = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10];

fileNum.forEach(output);

function output(items, index, array) {
    var alpha = "https://parsons.nyc/aa/m";
    var bravo = ".html";
    
    if (index < 9) {
        alpha = alpha.concat('0');
        newURL = alpha.concat(items,bravo)
        
        request(String(newURL), function(error, response, body){
            if (!error && response.statusCode == 200) {
                fs.writeFileSync('/home/ec2-user/environment/data/htmlFile' + (index + 1) + '.txt', body);
            }
            
            else {console.log("Request failed!")}
    
    })}
    
    else {
        var newURL = alpha.concat(items,bravo)
        request(String(newURL), function(error, response, body){
            if (!error && response.statusCode == 200) {
                fs.writeFileSync('/home/ec2-user/environment/data/htmlFile' + (index + 1) + '.txt', body);
            }
            else {console.log("Request failed!")}
    })};
    
}