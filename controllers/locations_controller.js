const express = require('express')
const locationsRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper

locationsRouter.get('/', query.findAllLocations)

locationsRouter.post('/', query.addLocation)

locationsRouter.get('/:id', query.findLocationById)


module.exports = locationsRouter