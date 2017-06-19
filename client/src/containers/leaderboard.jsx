import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'



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
        <div>
          <AppBar title='Table Tennis Tracker'> </AppBar>
          <p> test </p>
        </div>
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
