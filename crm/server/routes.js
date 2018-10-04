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
        country: req.body.country,
        _id: null
    })
    newClient.save()
    res.send(newClient)
})

router.get('/updateClient/:name', (req, res) => {
    Client.findOne({name: req.params.name}, (err, client) => {
        if (err) throw err;
        else res.send(client)
    }) 
})

router.put(('/updateOwner'), (req, res) => {
    Client.findByIdAndUpdate(req.body.id, {owner: req.body.newOwner}, {new: true}, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateSale'), (req, res) => {
    Client.findByIdAndUpdate(req.body.id, {sold: req.body.sale}, {new: true}, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

router.put(('/updateEmail'), (req, res) => {
    Client.findByIdAndUpdate(req.body.id, {emailType: req.body.emailType}, {new: true}, (err, doc) => {
        if (err) throw err;
        else res.send(doc)
    })
})

module.exports = router
