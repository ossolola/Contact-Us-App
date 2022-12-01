const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const {sendMail} = require("./utils/emailSender");
const {eMessage} = require("./utils/emailTemplate")

const app = express();
app.use(express.json());
app.use('/', express.static(__dirname + "/views"))

const PORT = process.env.PORT || 4000;


app.post('/', async (req, res) => {
    const {name, email, subject, message} = req.body;

    try {
        if (!name && !email && !subject && !message) {
            return res.status(500).json({
                message: "Incomplete Data"
            });
        }

        await sendMail({
            name,
            email,
            subject,
            message: await eMessage(name, email, subject, message)
        })

        res.status(201).json({
            message: "Email Sent"
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : "Email not Sent"
        });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})