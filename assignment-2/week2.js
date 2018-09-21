var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/htmlFile6.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
// $('div table tbody tr').each(function(i, elem) {
//     console.log($(elem).text());
// });

// write the project titles to a text file
var thesisTitles = ''; // this variable will hold the lines of text
var location = $('div table tbody tr');
var narrow = $(location.children('td'));
var narr = $(narrow.has('h4'));


narr.each(function(i, elem) {
    $('h4').remove()
    $('b').remove()
    $('.detailsBox').remove()
    $('span').remove()
    $('br').remove()
    thesisTitles += ($(elem).first().text()) + '\n';
});

fs.writeFileSync('data/htmlAddresses.txt', thesisTitles);