const express = require('express')
const router = new express.Router()

router.use('/api/locations', require('./locations_controller'))

router.use('/api/organisations', require('./organisations_controller'))

router.use('/api/games', require('./games_controller'))


module.exports = router
