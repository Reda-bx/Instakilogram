const express = require('express')
const router = express.Router()
const Authentification = require('../controllers/Authentification')
const passportService = require('../services/passport')
const User = require('../models/users')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireLogin = passport.authenticate('local', {session: false})
/* GET home page. */
router.get('/', (req, res) => {
  req.isAuthenticated() ? res.render('index', {user: req.user}) : res.render('login',{ } )
})
router.get('/logout', (req, res) => {req.logout(); res.redirect('/')})

router.post('/registration', Authentification.registration)
router.post('/login', requireLogin, Authentification.login)

router.get('/test', requireAuth, function(req, res){
  res.send('hi')
})

module.exports = router;
