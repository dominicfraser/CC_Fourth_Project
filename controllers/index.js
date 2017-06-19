const express = require('express')
const router = new express.Router()

router.use('/api/locations', require('./locations_controller'))

router.use('/api/organisations', require('./organisations_controller'))

router.use('/api/groups', require('./groups_controller'))

router.use('/api/players', require('./players_controller'))

router.use('/api/games', require('./games_controller'))

router.use('/api/joins', require('./joins_controller'))


module.exports = router
