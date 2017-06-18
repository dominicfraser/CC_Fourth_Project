"use strict"
const db = require('./pgHelper')

class dbQueryHelper {
//LOCATIONS
  findAllLocations(req, res, next){
    const sql = "SELECT * FROM locations ORDER BY l_name ASC"

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
  deleteLocation(req, res, next){
    const sql = "DELETE FROM locations WHERE id = $1 RETURNING *"

    const id = req.params.id;

    db.query(sql, [id])
        .then(location => res.json(location))
        .catch(next)
  }
  updateLocation(req, res, next){
    const sql = "UPDATE locations SET (l_name) = ($1) WHERE id = $2 RETURNING *"

    const l_name = req.body.l_name;
    const id = req.params.id;

    db.query(sql, [l_name, id])
        .then(location => res.json(location))
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


