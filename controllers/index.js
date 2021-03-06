const express = require('express')
const router = new express.Router()

const allRoutes = function(verifyToken, signToken) {

  router.use('/api/locations', require('./locations_controller'))

  router.use('/api/organisations', require('./organisations_controller'))

  router.use('/api/groups', require('./groups_controller'))

  router.use('/api/players', require('./players_controller'))

  router.use('/api/games', require('./games_controller'))

  router.use('/api/joins', require('./joins_controller'))

  router.use('/api/auth', require('./auth_controller')(signToken))

  router.use('/api/auth/checker', verifyToken, require('./checker_controller'))


  return router
}


module.exports = allRoutes
