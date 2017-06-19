import ApiRequestHelper from './apiRequestHelper'
import LocationModel from '../models/LocationModel'

class ApiCommunicatorHelper {
  constructor(){
    this.apiRequestHelper = new ApiRequestHelper()
  }

//LOCATIONS
  allLocations(callback){
    this.apiRequestHelper.makeGetRequest("http://localhost:3000/api/locations", (results) => {
      const locations = this.populateLocations(results)
      callback(locations)
    })
  }

//helpers
populateLocations(results){
  const locations = results.map((resultObject) => {
    return new LocationModel(resultObject)
  })
  return locations
}


}

export default ApiCommunicatorHelper
