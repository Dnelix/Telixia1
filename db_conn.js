var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    pass : "",
    database : "node_db"   //I added this line after I had created the db. It is required for any other query beyond CREATE DATABASE
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');
    //-----Now we can run Queries from here
    //-----Let's create a database
    //var sql = "CREATE DATABASE node_db";
    //-----Create Table
    //var sql = "CREATE table users ( name varchar(200), address VARCHAR(255), phone INT(12) )";
    //-----Alter Table
    //var sql = "ALTER table users ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    //-----Insert into table
    var sql = "INSERT INTO users (name, address, phone) VALUES ('Felix', 'Nationwide', '08165370642')";
    
    con.query(sql, function(err, result){
        if (err) throw err;
        //console.log("RESULT: "+result);
        console.log("Inserted!");
    });
});