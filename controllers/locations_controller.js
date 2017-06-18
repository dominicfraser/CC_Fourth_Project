const express = require('express')
const locationsRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper

locationsRouter.get('/', query.findAllLocations)

module.exports = locationsRouter