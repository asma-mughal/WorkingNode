const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    const testAccount = await nodemailer.createTestAccount()
    const transporter = await nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 587,
        secure: false, // Set secure to false
        requireTLS: true, // Require TLS
        auth: {
            user: 'connie.little@ethereal.email',
            pass: 'PTaFG1rZS199JCvbCE'
        },
    });
    const info = await transporter.sendMail({
        from: '"Asma" <abc@example.com>', // sender address
        to: "litik66642@huizk.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world learning Node?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
 res.json(info)   
}
module.exports = sendMail