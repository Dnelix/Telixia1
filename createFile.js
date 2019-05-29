var fs = require('fs');

//Using Append
fs.appendFile('appendDoc.txt', "Add this Stuff there", function(err){
    if(err) throw err;
    console.log("Saved!");
});

//Using Open
fs.open('openDoc.txt', 'w', function(err, file){
    if(err) throw err;
    console.log("Saved!");
});


//Using Write
fs.writeFile('writeDoc.txt', "Replace with this Stuff all the time", function(err){
    if(err) throw err;
    console.log("Saved!");
});
