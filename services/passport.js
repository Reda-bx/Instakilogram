const passport = require('passport')
const User = require('../models/users')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local').Strategy

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}
const localLogin = new LocalStrategy(function(username, password, done){
  User.findOne({username: username}, function(err, user){
    if(err) return done(err, false)

    if(!user) return done(null, false)

    if(password !== user.password) return done(null, false)

    return done(null, user)
  })
})
// JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  User.findById(payload.sub, function(err, user){
    if(err) return done(err, false)

    if(user){
      done(null, user)
    }else{
      done(null, false)
    }
  })
})

// tell passport to use this Strategy
passport.use(jwtLogin)
passport.use(localLogin)
