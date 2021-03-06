import ApiRequestHelper from './apiRequestHelper'
import LocationModel from '../models/LocationModel'
import PlayerModel from '../models/PlayerModel'
import GameModel from '../models/GameModel'

class ApiCommunicatorHelper {
  constructor(){
    this.apiRequestHelper = new ApiRequestHelper()
  }

//LOGIN
  logIn(callback, errorCallback, options){
    this.apiRequestHelper.makePostRequest("http://localhost:3000/api/auth/loginuser", (results) => {
      callback(results)
    }, (err) => {
      errorCallback(err)
    }, options)
  }
  logOut(){
    this.apiRequestHelper.makeLogOutDeleteRequest("http://localhost:3000/api/auth/logoutuser")
  }
  createAccount(callback, errorCallback, options){
    this.apiRequestHelper.makePostRequest("http://localhost:3000/api/auth/adduser", (results) => {
      callback(results)
    }, (err) => {
      errorCallback(err)
    }, options)
  }
  checkLoggedIn(callback){
    this.apiRequestHelper.makeGetRequest("http://localhost:3000/api/auth/checker", (result) => {
      callback(result)
    })
  }

  checkLoggedInHandleError(callback, errorCallback){
    this.apiRequestHelper.makeGetRequestHandleError("http://localhost:3000/api/auth/checker", (result) => {
      callback(result)
    }, (err) => {
      errorCallback(err)
    })
  }

//PLAYERS
  allPlayers(callback){
    this.apiRequestHelper.makeGetRequest("http://localhost:3000/api/players", (results) => {
      const players = this.populatePlayers(results)
      callback(players)
    })
  }
  allPlayersWithStats(callback){
    this.apiRequestHelper.makeGetRequest("http://localhost:3000/api/players/withstats", (results) => {
      const players = this.populatePlayers(results)
      callback(players)
    })
  }

//LOCATIONS
  allLocations(callback){
    this.apiRequestHelper.makeGetRequest("http://localhost:3000/api/locations", (results) => {
      const locations = this.populateLocations(results)
      callback(locations)
    })
  }

//GAMES
  addGame(callback, options){
    this.apiRequestHelper.makePostRequest("http://localhost:3000/api/games", (results) => {
      const game = new GameModel(results)
      callback(game)
    }, options)
  }

//helpers
populateLocations(results){
  const locations = results.map((resultObject) => {
    return new LocationModel(resultObject)
  })
  return locations
}
populatePlayers(results){
  const players = results.map((resultObject) => {
    return new PlayerModel(resultObject)
  })
  return players
}


}

export default ApiCommunicatorHelper
