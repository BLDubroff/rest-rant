const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(place => {
    res.redirect(`/places/${ place }`)
  }) 
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(deletedPlace => {
    res.status(303).redirect('/places')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    console.log(place)
    res.render('places/edit', {place})
  })
})

router.get('/:id/comment', (req, res) => {
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/newcomment', { place });
    })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.stars = Number(req.body.stars)
  if (req.body.rant == 'on'){
    req.body.rant = true
  }
  else {
    req.body.rant = false
  }
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

module.exports = router
