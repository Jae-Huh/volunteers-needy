var express = require('express')
var router = express.Router()

var db = require('../db')
var func = require('../functions')
var testrec

router.get('/', function (req, res) {
  Promise.all([
    func.lastFiveVac(req.app.get('connection')),
    func.lastFiveVol(req.app.get('connection'))
  ])
  .then(result => {
    const viewData = {
      vacancies: result[0],
      volunteers: result[1]
    }
    console.log(viewData)
    res.render('index', viewData)
  })
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
