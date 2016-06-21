const database = require('mongoose')

const url = 'mongodb://localhost/instakilogram'

module.exports = database.connect(url, function (err) {
    if (err) console.error(err)
});
