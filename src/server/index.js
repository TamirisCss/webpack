var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');

const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//add a app.post with an endpoint to check the sentiment of a text
app.post('/sentiment', (req, res) => {
    const url = encodeURI(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&url=${req.body.url}&lang=en`)
    axios.post(url)
        .then(response => res.send(response.data))    
})