var express = require('express'), // npm install express
  app = express();
const { Pool } = require('pg');
var AWS = require('aws-sdk');
const moment = require('moment-timezone'); // moment-timezone --save

// AWS RDS credentials
var db_credentials = new Object();
db_credentials.user = 'juan';
db_credentials.password = process.env.AWSRDS_HOST;
db_credentials.database = 'dbsensor';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;


// respond to requests for /sensor
var s1x = `<!DOCTYPE html>
<meta charset="utf-8">
<!-- Adapted from: http://bl.ocks.org/Caged/6476579 -->
<link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet">
<style>
body {
    background: white;
    font: 10px sans-serif;
    font-color: white;
      height: 900px;
}

a {
    color:#fff;
}

h2{
    color:black;
    font-family: "Staatliches";
    font-size: 45pt;
    letter-spacing: 0.03em;
}

h3 {
    color: black;
    font-family: "Staatliches";
    font-size: 28pt;
}

text {
}

#content {
  position: absolute;
  /*top: 50%;*/
  left: 50%;
  /*margin-top: -50px;*/
  margin-left: -315px;
  text-align: center;


}

#svg {
  margin-top: 360px;
  position: absolute;
  /*top: 50%;*/
  left: 50%;
  /*margin-top: -50px;*/
  margin-left: -480px;
  text-align: center;
  padding-top: 20px;


}

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
.bar {
  fill: #04b387;
}
.bar:hover {
  fill: black;
}
.x.axis path {
  display: none;
}
.d3-tip {
  line-height: 1;
  font-weight: bold;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 2px;
}
/* Creates a small triangle extender for the tooltip */
.d3-tip:after {
  box-sizing: border-box;
  display: inline;
  font-size: 10px;
  width: 100%;
  line-height: 1;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  text-align: center;
}
/* Style northward tooltips differently */
.d3-tip.n:after {
  margin: -1px 0 0 0;
  top: 100%;
  left: 0;
}
</style>
<body>
  <div id="content">
    <h2>When will Juan be back home?</h2>
    <h3>I don't know, I'm just a website...<br>However, here's a graph showing how many<br>minutes he's been home over the last few days.<br><span style="color: #04b387">Green represents the minutes he was home each day.</h3>
  </div>
  <div id="svg"></div>

  <!-- <div><h3 style="color: #04b387;">The green bars represent how many minutes he's been home.</h3></div> -->
</body>
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
<script>
var data =  `;

var s2x = `; 
data.splice(0,0,{"sensorday":3,"sensorvalue":"0"},)
data.splice(8,0,{"sensorday":24,"num_obs":"0"},)
data.splice(11,0,{"sensorday":27,"num_obs":"1.1219512195121951"},)

console.log(data)
var margin = {top: 70, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);
var y = d3.scale.linear()
    .range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Minutes at home:</strong> <span style='color:red'>" + d.sensorvalue + "</span>";
  })
var svg = d3.select("#svg").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);

  x.domain(data.map(function(d) { return d.sensorday; }));



  y.domain([0, d3.max(data, function(d) { console.log(d.sensorvalue); return d.sensorvalue; })]);
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(0,0)")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("Minutes at home");
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.sensorday); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.sensorvalue); })
      .attr("height", function(d) { return height - y(d.sensorvalue); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
</script>`;

app.get('/sensor', function(req, res) {


  // Connect to the AWS RDS Postgres database
  const client = new Pool(db_credentials);

  // SQL query 
  // var q = `SELECT count(*) FROM sensorData GROUP BY DATE(sensorData.sensorTime)`;

  // var q = `sensordata.sensortime, sensordata.sensorvalue`;

  var q = `SELECT EXTRACT(DAY FROM sensortime) as sensorday,
             COUNT(sensorvalue) as sensorvalue
             FROM sensorData
             WHERE sensorValue BETWEEN 0 AND 5000
             GROUP BY sensorday
             ORDER BY sensorday
             `;


  client.connect();
  client.query(q, (qerr, qres) => {
    if (qerr) { throw qerr }
    else {
      var resp = s1x + JSON.stringify(qres.rows) + s2x;
      res.send(resp);
      client.end();
      console.log('1) responded to request for sensor graph');
      console.log(JSON.stringify(qres.rows));
    }
  });
});


// END SENSOR PROJECT--------------------------------------//


// serve static files in /public
app.use(express.static('public'));

// listen on port 8080
app.listen(8080, function() {
  console.log('Server listening...');
});

