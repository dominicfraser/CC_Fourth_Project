const express = require('express')
const locationsRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper

locationsRouter.get('/', query.findAllLocations)

locationsRouter.post('/', query.addLocation)

locationsRouter.delete('/:id', query.deleteLocation)

locationsRouter.get('/:id', query.findLocationById)

locationsRouter.patch('/:id', query.updateLocation)


module.exports = locationsRouter