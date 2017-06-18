"use strict"
const db = require('./pgHelper')

class dbQueryHelper {
//LOCATIONS
  findAllLocations(req, res, next){
    const sql = "SELECT * FROM locations ORDER BY id ASC"

    db.query(sql, [])
        .then(locations => res.json(locations))
        .catch(next)
  }
  findLocationById(req, res, next){
    const sql = "SELECT * FROM locations WHERE id = $1"

    const id = req.params.id;

    db.query(sql, [id])
        .then(location => res.json(location[0]))
        .catch(next)
  }
  addLocation(req, res, next){
    const sql = "INSERT INTO locations (l_name) VALUES ($1) RETURNING *"

    const l_name = req.body.l_name

    db.query(sql, [l_name])
        .then(location => res.json(location[0]))
        .catch(next)    
  }

//GAMES
  findAllGames(req, res, next){
    const sql = "SELECT * FROM games ORDER BY tstamp ASC"

    db.query(sql, [])
        .then(games => res.json(games))
        .catch(next)
  }


}

module.exports = dbQueryHelper


