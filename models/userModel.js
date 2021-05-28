const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: 'string',
        required: [true, "First name is required"]
    },
    lastName: {
        type: 'string',
        required: [true, "Last name is required"]
    },
    email: {
        type: 'string',
        unique: [true, "Duplicate email. Email is already in use."],
        required: [true, "Email is required"]
    },
    password: {
        type: 'string',
        required: [true, "Password is required"]
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;