import mongoose from 'mongoose';

const formTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('formtype',formTypeSchema);