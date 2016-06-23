const passport = require('passport')
const User = require('../models/users')
const config = require('../config')
const LocalStrategy = require('passport-local').Strategy

//Create local Strategy
const localLogin = new LocalStrategy(function(username, password, done){
  // Check email and password, call done with the user
  // if it is the correct email and password
  //otherwise, call done with false
  User.findOne({username: username}, function(err, user){
    if(err) return done(err)

    if(!user) return done(null, false, {message: 'no user found'})

    // compare passwords
    if(password !== user.password) return done(null, false, {message: 'false password'})

    return done(null, user)
  })
})

passport.serializeUser(function(user, cb) {
  cb(null, user.username);
});

passport.deserializeUser(function(username, cb) {
  User.find({username: username}).then(function(user) {
    cb(null, user);
  });
});
// Tell passport to use this Strategy
passport.use(localLogin)
