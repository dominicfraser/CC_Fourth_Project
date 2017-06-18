const express = require('express')
const router = new express.Router()

router.use('/api/games', require('./games_controller'))

router.use('/api/locations', require('./locations_controller'))

module.exports = router
