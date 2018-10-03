var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const clientSchema = new Schema({
    _id: String,
    name: String,
    email: String,
    firstContact: String,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
});

const Client = mongoose.model("Client", clientSchema)
module.exports = Client