const express = require('express')
const usersRouter
 = new express.Router()
const dbQueryHelper = require('../db/dbQueryHelper.js')
const query = new dbQueryHelper()

var userControllers = function(signToken) {
  
  usersRouter.post('/', (req,res,next) => {

    console.log("got to post");

    var signTokenResponse = function(user) {
        console.log("got to signtoken");

        const token = signToken(user)

        res.json({
          user: user,
          token: token
        });
    }

    query.addUser(req,res,signTokenResponse, next);
  });

  return usersRouter;
}

module.exports = userControllers
