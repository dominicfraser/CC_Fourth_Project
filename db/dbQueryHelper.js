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

//PLAYERS
findAllPlayers(req, res, next){
  const sql = "SELECT * FROM players ORDER BY p_name ASC"

  db.query(sql, [])
      .then(players => res.json(players))
      .catch(next)
}
findPlayerById(req, res, next){
  const sql = "SELECT * FROM players WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(player => res.json(player[0]))
      .catch(next)
}
findPlayerStats(req, res, next){
  const sqlWins = "SELECT COUNT(id) AS wins FROM games WHERE p1_score>p2_score AND p1_id=$1 OR p2_score>p1_score AND p2_id=$1"
  const sqlLosses = "SELECT COUNT(id) AS losses FROM games WHERE p1_score<p2_score AND p1_id=$1 OR p2_score<p1_score AND p2_id=$1"
  const sqlNoGames = "SELECT COUNT(id) AS nogames FROM games WHERE p1_id=$1 OR p2_id=$1"

  const id = req.params.id;

  const promises = [db.query(sqlWins, [id]), db.query(sqlLosses, [id]), db.query(sqlNoGames, [id])]

  Promise.all(promises)
    .then(statsArray => {
      let wins = parseInt(statsArray[0][0].wins)
      let losses = parseInt(statsArray[1][0].losses)
      let noGames = parseInt(statsArray[2][0].nogames)

      res.json({wins: wins, losses: losses, noGames: noGames})
    })
    .catch(next)

}
addPlayer(req, res, next){
  const sql1 = "INSERT INTO players (p_name, rating, picture, primary_org_id, primary_group_id) VALUES ($1, $2, $3, $4, $5) RETURNING *"

  const p_name = req.body.p_name
  const rating = req.body.rating
  const picture = req.body.picture
  const primary_org_id = req.body.primary_org_id
  const primary_group_id = req.body.primary_group_id

  db.query(sql1, [p_name, rating, picture, primary_org_id, primary_group_id])
      .then(player => res.json(player[0]))
      .catch(next)
}
deletePlayer(req, res, next){
  const sql = "DELETE FROM players WHERE id = $1 RETURNING *"

  const id = req.params.id;

  db.query(sql, [id])
      .then(player => res.json(player))
      .catch(next)
}
updatePlayer(req, res, next){
  const sql = "UPDATE players SET (p_name, rating, picture, primary_org_id, primary_group_id) = ($1, $2, $3, $4, $5) WHERE id = $6 RETURNING *"

  const p_name = req.body.p_name
  const rating = req.body.rating
  const picture = req.body.picture
  const primary_org_id = req.body.primary_org_id
  const primary_group_id = req.body.primary_group_id
  const id = req.params.id;

  db.query(sql, [p_name, rating, picture, primary_org_id, primary_group_id, id])
      .then(player => res.json(player))
      .catch(next)
}


//GAMES
  findAllGames(req, res, next){
    const sql = "SELECT * FROM games ORDER BY tstamp ASC"

    db.query(sql, [])
        .then(games => res.json(games))
        .catch(next)
  }
  findGameById(req, res, next){
    const sql = "SELECT * FROM games WHERE id = $1"

    const id = req.params.id;

    db.query(sql, [id])
        .then(game => res.json(game[0]))
        .catch(next)
  }
  addGame(req, res, next){
    const sql1 = "INSERT INTO games (p1_id, p2_id, p1_score, p2_score, location_id) VALUES ($1, $2, $3, $4, $5) RETURNING *"

    const p1_id = req.body.p1_id
    const p2_id = req.body.p2_id
    const p1_score = req.body.p1_score
    const p2_score = req.body.p2_score
    const location_id = req.body.location_id

    db.query(sql1, [p1_id, p2_id, p1_score, p2_score, location_id])
        .then(game => res.json(game[0]))
        .catch(next)
  }
  deleteGame(req, res, next){
    const sql = "DELETE FROM games WHERE id = $1 RETURNING *"

    const id = req.params.id;

    db.query(sql, [id])
        .then(game => res.json(game))
        .catch(next)
  }
  updateGame(req, res, next){
    const sql = "UPDATE games SET (p1_id, p2_id, p1_score, p2_score, location_id) = ($1, $2, $3, $4, $5) WHERE id = $6 RETURNING *"

    const p1_id = req.body.p1_id
    const p2_id = req.body.p2_id
    const p1_score = req.body.p1_score
    const p2_score = req.body.p2_score
    const location_id = req.body.location_id
    const id = req.params.id;

    db.query(sql, [p1_id, p2_id, p1_score, p2_score, location_id, id])
        .then(game => res.json(game))
        .catch(next)
  }

//PL_GROUP_JOIN
findAllPlayersGroups(req, res, next){
  const sql = "SELECT * FROM pl_group_join ORDER BY id ASC"

  db.query(sql, [])
      .then(joins => res.json(joins))
      .catch(next)
}
findPlayerGroups(req, res, next){
  const sql = "SELECT * FROM pl_group_join WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(games => res.json(games))
      .catch(next)
}

//PL_ORG_JOIN
findAllPlayersOrganisations(req, res, next){
  const sql = "SELECT * FROM pl_org_join ORDER BY id ASC"

  db.query(sql, [])
      .then(joins => res.json(joins))
      .catch(next)
}
findPlayerOrganisations(req, res, next){
  const sql = "SELECT * FROM pl_org_join WHERE id = $1"

  const id = req.params.id;

  db.query(sql, [id])
      .then(games => res.json(games))
      .catch(next)
}


}

module.exports = dbQueryHelper


