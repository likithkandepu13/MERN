const nodemailer = require('nodemailer');


const gmailTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'adnanshariff119@gmail.com', //gmail id
        pass: 'ifmb ojzf papb nbdd'  // app password
    }
});


const mailOptions = {
    from: 'adnanshariff119@gmail.com',
    to: '2200090035@kluniversity.in',
    subject: 'MSWD PROJECT TEST MAIL',
    html: '<font color=red>Hello Adnan</font>'
};


gmailTransporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error('Error sending email through Gmail:', error.message);
    } else {
        console.log('Email Sent Successfully');
    }
});