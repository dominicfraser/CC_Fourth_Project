const express = require('express')
const organisationsRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper

organisationsRouter.get('/', query.findAllOrganisations)

organisationsRouter.post('/', query.addOrganisation)

organisationsRouter.delete('/:id', query.deleteOrganisation)

organisationsRouter.get('/:id', query.findOrganisationById)

organisationsRouter.patch('/:id', query.updateOrganisation)

module.exports = organisationsRouter