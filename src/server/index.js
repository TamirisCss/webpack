var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
//TODO apagar
const mockAPIResponse = require('./mockAPI.js')
const json = require('./mockAPI.js');

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

app.get('/test', (req, res) => {
    res.send(mockAPIResponse)
})

//add a app.post with an endpoint to check the topics of a text
app.post('/topics', (req, res) => {
    const url = encodeURI(`https://api.meaningcloud.com/topics-2.0?key=${process.env.API_KEY}&lang=en&txt=${req.body.text}&tt=a&uw=y`)
    axios.post(url)
        .then(response => res.send(response.data))    
})