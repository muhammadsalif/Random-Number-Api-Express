const express = require("express");
const bodyParser = require("body-parser");

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());



















app.listen(port, () => {
    console.log('Express app is listening at the http://localhost:', port)
})
