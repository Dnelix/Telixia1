var http = require('http');
var formid = require('formidable');
var fs = require('fs');

http.createServer(function(req,res){
    if (req.url == '/fileupload'){
        var form = new formid.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.path;
            var newpath = './uploads/'+files.filetoupload.name;

            fs.rename(oldpath, newpath, function(err){
                if(err) throw err;
                res.write("File Uploaded and Moved Successfully!");
                res.end();
            });
        });
    } else {
        /*
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"/><br/>');
        res.write('<input type="submit" value="Upload File"/>');
        res.write('</form>');
        return res.end();
        */
       fs.readFile('fileupload.html', function(err,data){
           if (err) throw err;
           res.writeHead(200, {'Content-Type' : 'text/html'});
           res.write(data);
           return res.end();
       });
    }
}).listen(8080);