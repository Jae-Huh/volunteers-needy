var express = require('express')
var router = express.Router()

var db = require('../db')
var func = require('../functions')


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
router.post('/signin', (req, res) => {
  const user = req.body.signinemail
  db.retrieveID(user, req.app.get('connection'))
  .then(result => {
    res.redirect(`profile/${result[0].id}`)
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
      const proNum = result[0]
      res.redirect(`profile/${proNum}`)
    })
})
router.get('/profile/:id', (req, res) => {
  var UserId = req.params.id
  console.log('test')
  db.getUserProfile(req.app.get('connection'), UserId)
  .then(result => {
    const view = result[0]
    console.log(view)
    res.render('profile', view)
  })
})

router.post('/newlisting/:id', function (req, res) {
  const decider = req.body.type
  if (decider === 'vac') {
    const newEntry = {
      location: req.body.location,
      title: req.body.title,
      category: req.body.category,
      user_id: req.params.id,
      description: req.body.description
    }
    db.addVacancies(req.app.get('connection'), newEntry)
      .then(result => {
        console.log(result)
      })
      res.redirect('/')
  }
  else {
    const newEntry = {
      location: req.body.location,
      category: req.body.category,
      user_id: req.params.id,
      description: req.body.description
    }
    db.addVolunteer(req.app.get('connection'), newEntry)
      .then(result => {
        console.log(result)
      })
      res.redirect('/')
  }
})

module.exports = router
