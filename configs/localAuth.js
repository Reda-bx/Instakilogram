var User = require('../models/users')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

module.exports = function(app){
  passport.use(new LocalStrategy({passReqToCallback : true }, function(req, username, password, cb) {
    User.findOne({username: username}, function(err, data) {
      console.log(data);
      if (err)
        return cb(err)
      if(!data)
        return cb(null, false, req.flash('loginMessage', 'No user found.'));
      if (data.password !== password)
        return cb(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      return done(null, user);
    });
  }));

  passport.serializeUser(function(user, cb) {
    cb(null, user[0].username);
  });

  passport.deserializeUser(function(username, cb) {
    User.find({username: username}).then(function(user) {
      cb(null, user);
    });
  });

  app.post('/login', function(req, res, next){
    passport.authenticate('local',
      { successRedirect: '/',
      failureRedirect: '/',
      failureFlash : true
      })(req, res, next);
  })
}
