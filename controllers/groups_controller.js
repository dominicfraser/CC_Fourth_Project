const express = require('express')
const groupsRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper()

groupsRouter.get('/', query.findAllGroups)

groupsRouter.post('/', query.addGroup)

groupsRouter.delete('/:id', query.deleteGroup)

groupsRouter.get('/:id', query.findGroupById)

groupsRouter.patch('/:id', query.updateGroup)


module.exports = groupsRouter