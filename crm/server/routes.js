const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var Client = require('./models/Client');
const router = express.Router()



router.get('/clients', (req, res) => {
    console.log("I'm here bitches")
    Client.find({}, (err, clients) =>{
      if (err) throw err;
      else res.send(clients)
    })
})

module.exports = router