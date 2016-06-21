const mongoose = require('mongoose')
var Schema = mongoose.Schema


var userSchema =new Schema({
    username: String,
    fullname: String,
    email: String,
    password: String,
    followers: Array,
    following: Array
});

var User = mongoose.model('User', userSchema);


module.exports = User;
