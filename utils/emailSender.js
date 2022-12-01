const nodemailer = require("nodemailer");


exports.sendMail = async(option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    const mailOptions = {
        from: `${option.name} <${option.email}>`,
        to: process.env.MY_EMAIL,
        subject: `Contact Us Form ${option.subject}`,
        html: option.message
    }

    await transporter.sendMail(mailOptions);
}