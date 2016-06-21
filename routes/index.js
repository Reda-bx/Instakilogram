var express = require('express')
var router = express.Router()
var db = require('../configs/db')
var localAuth = require('../configs/localAuth')

localAuth(router)

/* GET home page. */
router.get('/', (req, res) => {
  req.isAuthenticated() ? res.render('index', {user: req.user[0]}) : res.render('login',{ message: req.flash('loginMessage') } )

})
router.get('/logout', (req, res) => {req.logout(); res.redirect('/')})

router.post('/registration', function(req, res){
  console.log(req.body.username);
  res.json('ok')
})

module.exports = router;
