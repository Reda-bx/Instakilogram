var express = require('express')
var router = express.Router()
var db = require('../configs/db')
var localAuth = require('../configs/localAuth')
var registration = require('../configs/registration')
var User = require('../models/users')

localAuth(router)
registration(router)

/* GET home page. */
router.get('/', (req, res) => {
  req.isAuthenticated() ? res.render('index', {user: req.user[0]}) : res.render('login',{ msgLogin: req.flash('loginMessage'), msgRegistration: req.flash('signupMessage') } )
})
router.get('/logout', (req, res) => {req.logout(); res.redirect('/')})


module.exports = router;
