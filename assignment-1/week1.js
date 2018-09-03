
var request = require('request');
var fs = require('fs');
var fileNum = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10];

//Command running the output function for every item in the fileNum array.
fileNum.forEach(output);

//Function running the request through Node.js.
function output(items, index, array) {
    var alpha = "https://parsons.nyc/aa/m";
    var bravo = ".html";
    
    //For all items in the array where the index is less than 9 run the following code.
    if (index < 9) {
        
        //add a '0' at the end of alpha and run the request for each item.
        alpha = alpha.concat('0');
        newURL = alpha.concat(items,bravo)
        
        request(String(newURL), function(error, response, body){
            if (!error && response.statusCode == 200) {
                fs.writeFileSync('/home/ec2-user/environment/data/htmlFile' + (index + 1) + '.txt', body);
            }
            
            else {console.log("Request failed!")}
    
    })}
    
    // if the index of the item is larger than 9, run the following code.
    else {
    
        //Note: NOT adding a '0' to the end of alpha.
        var newURL = alpha.concat(items,bravo)
        request(String(newURL), function(error, response, body){
            if (!error && response.statusCode == 200) {
                fs.writeFileSync('/home/ec2-user/environment/data/htmlFile' + (index + 1) + '.txt', body);
            }
            else {console.log("Request failed!")}
    })};
    
}