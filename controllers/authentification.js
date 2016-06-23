const User = require('../models/users')
const config = require('../config.js')

exports.login = function(req, res, next){
  // la wsalti lahna khod lik token
  res.send({success: "Mar7ba bb."})
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
      if(username === user.username) return res.send({error: 'Username in use'})

      if(email === user.email) return res.send({error: 'email in use'})
    }

    var newUser = new User({
      username: username,
      fullname: fullname,
      email: email,
      password: password
    })

    newUser.save(function(err, user){
      if(err) return res.send({error: err})

      req.login(user, function (err) {
        if(err) return console.log(err)

        res.send({success: true})
      })

    })
  })
}
