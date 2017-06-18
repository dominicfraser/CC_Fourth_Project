const express = require('express')
const gamesRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper

gamesRouter.get('/', query.findAllGames)

module.exports = gamesRouter