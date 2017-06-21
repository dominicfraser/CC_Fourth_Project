const express = require('express')
const usersRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper()

const userControllers = function(signToken) {
  
  usersRouter.post('/adduser', (req,res,next) => {
    const signTokenResponse = function(user) {

        const token = signToken(user)

        res.json({
          user: user,
          token: token
        })
    }
    query.addUser(req,res,signTokenResponse, next)
  })

  usersRouter.post('/loginuser', (req,res,next) => {
    const signTokenResponse = function(user) {

      if(user === null) {
        res.status(401)
        res.json({
          message: "incorrect password or username"
        })
      } else {
        const token = signToken(user)

        res.json({
          user: user,
          token: token
        }) 
      }
    }
    query.loginUser(req,res,signTokenResponse, next)
  })
  return usersRouter
}

module.exports = userControllers
