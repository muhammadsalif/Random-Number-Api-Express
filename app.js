const express = require("express");
const bodyParser = require("body-parser");

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());

app.get("/random/:max/:min", (req, res) => {
    let max = parseInt(req.params.max)
    let min = parseInt(req.params.min)
    if (isNaN(max) || isNaN(min)) {
        res.status(400).json({
            error: "Bad request"
        })
        return;
    }
    // Random number formula
    var result = Math.round((Math.random() * (max - min)) + min);
    res.json({
        result:result
    })
})

app.listen(port, () => {
    console.log('Express app is listening at the http://localhost:', port)
})
