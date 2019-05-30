var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'chinelix05@gmail.com',
        pass : 'chinelix'
    }
});

var mailOptions = {
    from : 'chinelix05@gmail.com',
    to : 'domainbuy101@gmail.com, felix.anyaegbunam@unn.edu.ng, dnelixtech@gmail.com',
    subject : 'Testing Email sending using Node.js',
    text : 'Now this is awesome!',
    html : '<h1>Wow!</h1><p>I can send using HTML formats as well</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('Email has been sent: '+info.response);
    }
});