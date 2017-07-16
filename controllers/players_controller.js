const express = require('express')
const playersRouter
 = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper()

playersRouter.get('/', query.findAllPlayers)

playersRouter.get('/withstats', query.findAllPlayersWithStats)

playersRouter.post('/', query.addPlayer)

playersRouter.delete('/:id', query.deletePlayer)

playersRouter.get('/:id', query.findPlayerById)

playersRouter.get('/:id/withstats', query.findPlayerWithStats)

playersRouter.patch('/:id', query.updatePlayer)

module.exports = playersRouter