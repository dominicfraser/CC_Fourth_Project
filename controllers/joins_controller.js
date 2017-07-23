const express = require('express')
const joinsRouter
 = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper()

joinsRouter.get('/groups', query.findAllPlayersGroups)

joinsRouter.get('/groups/player/:id', query.findPlayerGroups)

joinsRouter.get('/organisations', query.findAllPlayersOrganisations)

joinsRouter.get('/organisations/player/:id', query.findPlayerOrganisations)

module.exports = joinsRouter