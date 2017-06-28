const jwt = require('jsonwebtoken')

const verifyToken = function(key) {

  return function(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.cookies.jwtcookie

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, key, function(err, decoded) {      
        if (err) {
          return res.status(403).send({ success: false, message: 'Failed to authenticate token.' })    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded
          next()
        }
      })

    } else {
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      })

    }
  }
}

module.exports = verifyToken
