const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())



app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



projectData = {APIKey: process.env.API_KEY};

app.get('/api', function (req, res) {
    res.send(projectData)
})


/* 
projectData = {};

app.post('/addWeatherData', (req, res) => {
	req.body.testing = "test";
	for(let prop in req.body) projectData[prop] = req.body[prop];
	//projectData = req.body.feeling;
	res.send(projectData);
});


app.get('/allData', (req, res) => res.send(projectData))


//https://api.meaningcloud.com/sentiment-2.1?key=a89edeeffa9097f9dba8adec6fda4aa3&txt=food%20was%20very%20nice.&lang=en
 */