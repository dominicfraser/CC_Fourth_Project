const express = require('express')
const checkerRouter = new express.Router()

checkerRouter.get('/', (req,res)=>{ res.json({checkerApi: "reached api"}) })
//doesnt need to actually hit db, the fact it gets a 200 for getting this far is enough

module.exports = checkerRouter