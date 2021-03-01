const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const personSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, default: -1},
    gender: {type: String, default: 'Unknown'},
    weight: {type: Number, default: -1},
    height: {type: Number, default: -1},
    isMarried: {type: Boolean, default: null}
});

module.exports = User = mongoose.model('Person', personSchema, 'Persons');