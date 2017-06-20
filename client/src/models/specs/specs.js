const PlayerModel = require('../PlayerModel')

const assert = require('assert')

describe('Specs', function() {
  let player1
  let player2
  let player3
  let player4

  beforeEach(function() {
    player1 = new PlayerModel({id: 1, p_name: 'David', rating: 0, picture: 'blank', primary_org_id: 1, primary_group_id: 2, wins: 5, losses:5})

    player2 = new PlayerModel({id: 1, p_name: 'Jake', rating: 0, picture: 'blank', primary_org_id: 1, primary_group_id: 2, wins: 6, losses:2})

    player3 = new PlayerModel({id: 1, p_name: 'Liz', rating: 0, picture: 'blank', primary_org_id: 1, primary_group_id: 2})

    player4 = new PlayerModel({id: 1, p_name: 'Bob', rating: 0, picture: 'blank', primary_org_id: 1, primary_group_id: 2, wins: 7, losses:2})

    player5 = new PlayerModel({id: 1, p_name: 'Kim', rating: 0, picture: 'blank', primary_org_id: 1, primary_group_id: 2, wins: 1, losses:0})

    player6 = new PlayerModel({id: 1, p_name: 'Kim', rating: 0, picture: 'blank', primary_org_id: 1, primary_group_id: 2, wins: 0, losses:1})
  });

//PLAYER
  it('player should have name of David', function() {
    assert.equal(player1.p_name, 'David')
  })

  it('player should have primary_org_id of 1', function() {
    assert.equal(player1.primary_org_id, 1)
  })

  it('player noGames should be sum of games', function() {
    assert.equal(player1.noGames, 10)
    assert.equal(player2.noGames, 8)
  })

  it('player default wins/losses zero', function() {
    assert.equal(player3.wins, 0)
    assert.equal(player3.losses, 0)
  })

  it('player has percentage ratio', function() {
    assert.equal(player1.win_ratio_percentage(), 50)
    assert.equal(player4.win_ratio_percentage(), 77.78)
  })

  it('player has percentage ratio no wins only losses', function() {
    assert.equal(player6.win_ratio_percentage(), 0)
  })

  it('player has string : ratio', function() {
    assert.equal(player1.win_ratio_ratio(), "1:1")
    assert.equal(player2.win_ratio_ratio(), "3:1")
  })

  it('string : ratio handles / zero', function() {
    assert.equal(player5.win_ratio_ratio(), "1:0")
    assert.equal(player6.win_ratio_ratio(), "0:1")
  })


})
