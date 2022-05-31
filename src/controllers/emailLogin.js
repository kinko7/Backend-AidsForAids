const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'kion7kion@gmail.com',
        pass: 'sdsfsfsgs'
    }
})

module.exports = transporter
