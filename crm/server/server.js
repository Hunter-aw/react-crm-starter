const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const SERVER_PORT = 8080;

mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/crm', function() {
  console.log("DB connection established!!!");
})

const Client = require('./models/Client');
const api = require('./routes')


var app = express();

app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Set Api Routes
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })
app.use('/', api)

app.listen(process.env.PORT || `${SERVER_PORT}`, () => {
    console.log("Server started on port " + SERVER_PORT);
  });



// const data = require('../src/data.json')

// for (let client of data) {
//     let newClient = new Client ({
//         name: client.name,
//         email: client.email,
//         firstContact: client.firstContact,
//         emailType: client.emailType,
//         sold: client.sold,
//         owner: client.owner,
//         country: client.country
//     })
//     newClient.save()
// }
