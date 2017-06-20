class PlayerModel {
  constructor(optionsHash){
    this.id = optionsHash.id
    this.p_name = optionsHash.p_name
    this.rating = optionsHash.rating
    this.picture = optionsHash.picture
    this.primary_org_id = optionsHash.primary_org_id
    this.primary_group_id = optionsHash.primary_group_id
    this.wins = parseInt(optionsHash.wins) || 0
    this.losses = parseInt(optionsHash.losses) || 0
    this.noGames = this.wins + this.losses
  }
}

//so specs can read it
module.exports = PlayerModel
