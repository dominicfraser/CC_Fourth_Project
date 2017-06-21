const express = require('express')
const gamesRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper()

gamesRouter.get('/', query.findAllGames)

gamesRouter.post('/', query.addGame)

gamesRouter.delete('/:id', query.deleteGame)

gamesRouter.get('/:id', query.findGameById)

gamesRouter.patch('/:id', query.updateGame)

module.exports = gamesRouter