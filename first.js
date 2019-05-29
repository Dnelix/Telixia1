var http = require('http');
var dt = require('./mydatemodule'); //connecting to mydatemodule which I created earlier. Also note that there's no need for file extension

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write("The Date and Time is currently "+dt.myDateTime()); //Calling the particular function needed from the date module file
    res.write("<br/>");
    res.write(req.url); //Lets try reading the request URL
    res.write("<br/>");
    res.end("This is where I end this Program!")
}).listen(8080);