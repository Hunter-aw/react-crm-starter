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

router.post('/newclient', (req, res) => {
    console.log(req.body)
    let newClient = new Client ({
        name: req.body.name,
        email: req.body.email,
        firstContact: new Date().toString(),
        emailType: "",
        sold: false,
        owner: req.body.owner,
        country: req.body.country
    })
    newClient.save()
    res.send(newClient)
})

module.exports = router
