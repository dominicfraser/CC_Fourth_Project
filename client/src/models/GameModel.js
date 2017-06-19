class GameModel {
  constructor(optionsHash){
    this.id = optionsHash.id
    this.p1_id = optionsHash.p1_id
    this.p2_id = optionsHash.p2_id
    this.p1_score = optionsHash.p1_score
    this.p2_score = optionsHash.p2_score
    this.winner_id = optionsHash.winner_id
    this.tstamp = optionsHash.tstamp
    this.p1_org_id = optionsHash.p1_org_id
    this.p2_org_id = optionsHash.p2_org_id
    this.p1_group_id = optionsHash.p1_group_id
    this.p2_group_id = optionsHash.p2_group_id
    this.location_id = optionsHash.location_id
  }
}

export default GameModel