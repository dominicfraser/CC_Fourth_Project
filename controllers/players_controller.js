const express = require('express')
const playersRouter
 = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper

playersRouter.get('/', query.findAllPlayers)

playersRouter.post('/', query.addPlayer)

playersRouter.delete('/:id', query.deletePlayer)

playersRouter.get('/:id', query.findPlayerById)

playersRouter.get('/:id/stats', query.findPlayerStats)

playersRouter.patch('/:id', query.updatePlayer)


module.exports = playersRouter
