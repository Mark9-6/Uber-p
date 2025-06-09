const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minLength:['3', 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minLength:['3', 'Last name must be at least 3 characters long'],
        }

    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: ['5', 'Email must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        select:false
    },
    socketId: {
        type: String,
        default: null,
    },
})


userSchema.methods.generateAuthToken = async function () {
    
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}

userSchema.statics.hashPassword = async function (password) {
    return  await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;