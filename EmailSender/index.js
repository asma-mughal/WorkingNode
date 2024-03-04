const express = require('express')
const sendMail = require("./controllers/sendMail")
const app = express()
let PORT = 5000
app.get("/", (req, res) => {
    res.send("I am a server")
})
app.get("/sendEmail", sendMail)
const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log("I am live")
        })
    }
    catch (e) {
        console.log("err", e)
    }
}
start()