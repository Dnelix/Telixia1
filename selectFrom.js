var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    pass : "",
    database : "node_db"
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');

    var sql = "SELECT * FROM users";
    con.query(sql, function(err, result, fields){
        if (err) throw err;
        console.log(result);
        console.log(result[3]);
        console.log(result[4].phone);
        console.log(fields);
    });
});