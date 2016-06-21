var User = require('../models/users')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy



module.exports = function(app){
  app.post('/registration', function(req, res){
    console.log('req.param',req.body.email);
    var newUser = new User()

    newUser.username = req.body.username
    newUser.fullname = req.body.fullname
    newUser.email = req.body.email
    newUser.password = req.body.password

    newUser.save(function(err, user){
      if(err) res.redirect('/')
      else{
        passport.authenticate('local')(req, res, function(){
          res.redirect('/')
        })
      }
    })
  })
}
