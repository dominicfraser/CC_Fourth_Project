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

//ORGANISATIONS
findAllOrganisations(req, res, next){
  const sql = "SELECT * FROM organisations ORDER BY o_name ASC"

  db.query(sql, [])
      .then(organisations => res.json(organisations))
      .catch(next)
}
findOrganisationById(req, res, next){
  const sql = "SELECT * FROM organisations WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(organisation => res.json(organisation[0]))
      .catch(next)
}
addOrganisation(req, res, next){
  const sql = "INSERT INTO organisations (o_name) VALUES ($1) RETURNING *"

  const o_name = req.body.o_name

  db.query(sql, [o_name])
      .then(organisation => res.json(organisation[0]))
      .catch(next)    
}
deleteOrganisation(req, res, next){
  const sql = "DELETE FROM organisations WHERE id = $1 RETURNING *"

  const id = req.params.id;

  db.query(sql, [id])
      .then(organisation => res.json(organisation))
      .catch(next)
}
updateOrganisation(req, res, next){
  const sql = "UPDATE organisations SET (o_name) = ($1) WHERE id = $2 RETURNING *"

  const o_name = req.body.o_name;
  const id = req.params.id;

  db.query(sql, [o_name, id])
      .then(organisation => res.json(organisation))
      .catch(next)
}

//GROUPS
findAllGroups(req, res, next){
  const sql = "SELECT * FROM groups ORDER BY g_name ASC"

  db.query(sql, [])
      .then(groups => res.json(groups))
      .catch(next)
}
findGroupById(req, res, next){
  const sql = "SELECT * FROM groups WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(group => res.json(group[0]))
      .catch(next)
}
addGroup(req, res, next){
  const sql = "INSERT INTO groups (g_name, org_id) VALUES ($1, $2) RETURNING *"

  const g_name = req.body.g_name
  const org_id = req.body.org_id

  db.query(sql, [g_name, org_id])
      .then(group => res.json(group[0]))
      .catch(next)    
}
deleteGroup(req, res, next){
  const sql = "DELETE FROM groups WHERE id = $1 RETURNING *"

  const id = req.params.id;

  db.query(sql, [id])
      .then(group => res.json(group))
      .catch(next)
}
updateGroup(req, res, next){
  const sql = "UPDATE groups SET (g_name, org_id) = ($1, $2) WHERE id = $3 RETURNING *"

  const g_name = req.body.g_name;
  const org_id = req.body.org_id;
  const id = req.params.id;

  db.query(sql, [g_name, org_id, id])
      .then(group => res.json(group))
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


