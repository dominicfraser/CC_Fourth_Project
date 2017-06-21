const jwt = require('jsonwebtoken')

const signToken = function(key) {

  return function(object) {

    const token = jwt.sign(object, key, {

      expiresIn: 1440 // expires in 24 hours
      })

    return token
  }
}


module.exports = signToken
