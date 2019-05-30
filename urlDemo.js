var url = require('url');
var addr = "http://localhost:8080/home.htm?year=2019&month=may";
var q = url.parse(addr, true);

var hostname = q.host; //returns 'localhost:8080'
var pathname = q.pathname; //returns '/home.htm'
var querystring = q.search; //returns the query string '?year=2019&month=may'
var querydata = q.query; //returns the query data as a JSON object '{year:2019, month:may}'

console.log(hostname);
console.log(pathname);
console.log(querystring);
console.log(querydata);
console.log(querydata.year); //Extracting an element from the JSON object