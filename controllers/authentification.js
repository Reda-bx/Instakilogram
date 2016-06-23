const jwt = require('jwt-simple')
const User = require('../models/users')
const config = require('../config.js')
const passport = require('passport')

function tokenForUser(user){
  return jwt.encode({ sub: user.id, iat: new Date().getTime()}, config.secret)
}

exports.login = function(req, res, next){
  // la wslati lahna khod lik token
  res.json({success: true, token: tokenForUser(req.user)})
}

exports.registration = function(req, res, next){
  const username = req.body.username
  const fullname = req.body.fullname
  const email = req.body.email
  const password = req.body.password

  // See if user already exists
  User.findOne( {"$or": [{email: email}, {username: username}]} , function(err, user){
    if(err) return next(err)

    if(user){
      if(username === user.username) return res.send({success: false, msg: 'Username in use'})

      if(email === user.email) return res.send({success: false, msg: 'email in use'})
    }

    var newUser = new User({
      username: username,
      fullname: fullname,
      email: email,
      password: password
    })

    newUser.save(function(err, user){
      if(err) return res.send({error: err})

      res.json({success: true, token: tokenForUser(user)})
    })
  })
}
