const express = require('express')
const checkerRouter = new express.Router()
const dbCheckerQueryHelper = require('../db/dbCheckerQueryHelper.js')
const query = new dbCheckerQueryHelper()

checkerRouter.get('/', query.checkAuthorised)

module.exports = checkerRouter