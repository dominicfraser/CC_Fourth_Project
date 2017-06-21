const express = require('express')
const authRouter = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper()

const authController = function(signToken) {
  
  authRouter.post('/adduser', (req,res,next) => {
    const signTokenResponse = function(user) {

        const token = signToken(user)

        res.cookie('jwtcookie', token, {maxAge: 1000*60*60*24})

        res.json({
          user: user
        })
    }
    query.addUser(req,res,signTokenResponse, next)
  })

  authRouter.post('/loginuser', (req,res,next) => {
    const signTokenResponse = function(user) {

      if(user === null) {
        res.status(401)
        res.json({
          message: "incorrect password or username"
        })
      } else {
        const token = signToken(user)

        res.cookie('jwtcookie', token, {maxAge: 1000*60*60*24})

        res.json({
          user: user
        }) 
      }
    }
    query.logInUser(req, res, signTokenResponse, next)
  })

  authRouter.delete('/logoutuser', (req,res,next) => {
    res.cookie('jwtcookie', "", {maxAge: 1000})
    res.status(204).send()
  })

  return authRouter
}

module.exports = authController
