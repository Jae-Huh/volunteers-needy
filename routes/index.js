var express = require('express')
var router = express.Router()

var db = require('../db')
var func = require('../functions')

router.get('/', function (req, res) {
  func.lastFive(req.app.get('connection'))
  res.render('index')
})

router.post('/new', function (req, res) {
  const newUser = {
    name: req.body.name,
    email: req.body.email
  }
  db.addUser(newUser, req.app.get('connection'))
    .then(result => {
      console.log(result)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



//   db.getUsers(req.app.get('connection'))
//     .then(function (users) {
//       res.render('index', { users: users })
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router
