"use strict"
const db = require('./pgHelper')

class dbQueryHelper {

  findAllGames(req, res, next){
    const sql = "SELECT * FROM games ORDER BY tstamp ASC"

    db.query(sql, [])
        .then(games => res.json(games))
        .catch(next)
  }

  findAllLocations(req, res, next){
    const sql = "SELECT * FROM locations ORDER BY id ASC"

    db.query(sql, [])
        .then(locations => res.json(locations))
        .catch(next)
  }

}

module.exports = dbQueryHelper


