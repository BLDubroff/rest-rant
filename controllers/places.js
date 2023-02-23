const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/new', (req, res) => {
  res.redirect('/places')
})

//places locations are temp filler

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding-cat-cafe.jpg'
      }]      
    res.render('places/index', { places })
})



module.exports = router