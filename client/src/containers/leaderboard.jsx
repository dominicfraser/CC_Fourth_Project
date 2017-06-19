import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'


class Leaderboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      locations: []
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.findAllLocations()
  }

  render(){

    return (
        <p> test </p>
      )

  }

  componentDidMount(){
  }

  findAllLocations(){
    this.apiCommunicatorHelper.allLocations((locations) => {
      this.setState({ locations: locations })
  console.log('locations in leaderboard', locations)
    })
  }


}

export default Leaderboard 
