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
    
    //-----Multiple Inserts
    var sql = "INSERT INTO users (name, phone) VALUES ?"; //replace the values with ?
    var values = [
        ["Felix","08165370642"],
        ["Ada","0816567642"],
        ["Ngozi","08166780642"],
        ["Obinna","08165375675"],
        ["Uju","08165455723"],
        ["Nkobi","08082378742"],
        ["Ibisa","09082378742"],
        ["Egbeda","07082378742"],
    ];
    con.query(sql, [values], function(err, result){
        if (err) throw err;
        console.log("Inserted "+result.affectedRows+" rows!");
    });
});