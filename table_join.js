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
    //-----Create the products table
    var sql = "CREATE table IF NOT EXISTS products ( id INT(10) AUTO_INCREMENT PRIMARY KEY, user_id INT(5), product_name VARCHAR(200), stock INT(10), price INT(10) )";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Table Created!");
    });
    /*-----Insert Values into the Products table
    var sql = 'INSERT INTO products (user_id, product_name, stock, price) VALUES ?';
    var values = [
        [2,"Bread",100,300],
        [5,"Biscuit",500,150],
        [12,"Sweet",400,10],
        [11,"Garri",50,100],
        [6,"Okro",200,50],
        [8,"Knife",100,130],
    ];
    con.query(sql, [values], function(err, result){
        if (err) throw err;
        console.log("Inserted!");
    });
    */
    //----JOIN users table with products table ON user_id column  --JOIN and INNER JOIN work the same way
    var sql = 'SELECT users.name AS user, products.product_name AS prod FROM users INNER JOIN products ON products.user_id=users.id';
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("<br/>");
    });
    //----LEFT JOIN  --includes all elements from the left (users) table
    var sql = 'SELECT users.name AS user, products.product_name AS product FROM users LEFT JOIN products ON products.user_id = users.id';
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log(result);
        console.log("<br/>");
    });
    //----RIGHT JOIN  --includes all elements from the right (products) table
    var sql = 'SELECT users.name AS user, products.product_name AS product FROM users RIGHT JOIN products ON products.user_id = users.id';
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log(result);
        console.log("<br/>");
    });
});