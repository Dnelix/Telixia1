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

    //SQL Codes
    var sql = 'SELECT * FROM users';
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result[0].phone);
    });
    //----Using Wildcard characters (WHERE LIKE %)
    var sql = 'SELECT * FROM users WHERE name LIKE "%a%"';
    con.query(sql, function(err, result){
        if(err) throw err;
        //console.log(result);
    });
    //----Escaping query values
    var usr = "Ibisa";
    var sql = 'SELECT * FROM users WHERE name = '+mysql.escape(usr);
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log(result);
    });
    // Replacing with ? (An efficient method, we don't need to escape here)
    var usr = "Ibisa"; var phn = "816567642";
    var sql = 'SELECT * FROM users WHERE name = ? OR phone LIKE ?';
    con.query(sql, [usr,phn], function(err, result){
        if(err) throw err;
        console.log(result);
    });
});