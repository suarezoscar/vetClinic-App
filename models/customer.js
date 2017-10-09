'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.Promise = global.Promise; // porque?

const CustomerSchema = Schema({
    dni: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    note: String
});

module.exports = mongoose.model("Customer", CustomerSchema);