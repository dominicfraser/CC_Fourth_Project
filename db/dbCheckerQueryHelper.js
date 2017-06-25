"use strict"
const db = require('./pgHelper')

class dbCheckerQueryHelper {

  checkAuthorised(req,res,next){
    const sql = "SELECT * FROM checks WHERE id = $1"

    db.query(sql, [1])
        .then(check => res.json(check[0]))
        .catch(next)
  }
}

module.exports = dbCheckerQueryHelper
