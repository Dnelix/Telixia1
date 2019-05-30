var uc = require('upper-case'); //Already installed 'upper-case' via npm install
var ht = require('http');

ht.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(uc("This was actually written in small case<br/>"));
    res.end(uc("bye!"));
}).listen(8080);