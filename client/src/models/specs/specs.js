const PlayerModel = require('../PlayerModel')

const assert = require('assert')

describe('Specs', function() {
  let player

  beforeEach(function() {
    player = new PlayerModel({id: 1, p_name: 'David', rating: 0, picture: 'blank', primary_org_id: 1, primary_group_id: 2})
  });

//PLAYER
  it('player should have name of David', function() {
    assert.equal(player.p_name, 'David')
  });

  it('player should have primary_org_id of 1', function() {
    assert.equal(player.primary_org_id, 1)
  });

});
