const express = require('express')
const router = express.Router()
const Authentification = require('../controllers/Authentification')
const passportService = require('../services/passport')
const User = require('../models/users')
const passport = require('passport')

const requireLogin = passport.authenticate('local', {successRedirect: '/', ession: false})
/* GET home page. */
router.get('/', (req, res) => {
  req.isAuthenticated() ? res.render('index', {user: req.user[0]}) : res.render('login',{ } )
})
router.get('/logout', (req, res) => {req.logout(); res.redirect('/')})

router.post('/registration', Authentification.registration)
router.post('/login', requireLogin, Authentification.login)

router.get('/test', function(req, res){
  req.isAuthenticated() ? res.send('hi') : res.redirect('/')
})

module.exports = router;
