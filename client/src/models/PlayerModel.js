class PlayerModel {
  constructor(optionsHash){
    this.id = optionsHash.id
    this.p_name = optionsHash.p_name
    this.email = optionsHash.email
    this.password = optionsHash.password
    this.rating = optionsHash.rating
    this.picture = optionsHash.picture
    this.primary_org_id = optionsHash.primary_org_id
    this.primary_group_id = optionsHash.primary_group_id
    this.wins = parseInt(optionsHash.wins) || 0
    this.losses = parseInt(optionsHash.losses) || 0
    this.noGames = this.wins + this.losses
  }

  win_ratio_percentage(){
    const ratio = Math.round(this.wins / this.noGames * 10000) /100
    return ratio
  }

  win_ratio_ratio(){
    let ratio = null
    if(this.losses > 0){
      ratio = `${this.wins/this.losses}:1`
    } else {
      ratio = `${this.wins}:${this.losses}`
    }
    return ratio
  }


}

//so specs can read it
module.exports = PlayerModel
