import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'
import Autocomplete from 'react-toolbox/lib/autocomplete'

class AddGame extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      locations: [],
      selectedLocation: ""
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    this.findAllLocations()

    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  render(){

    const locationNames = this.findAllLocationNames()

    return (
      <div>
        <AppBar title='Table Tennis Tracker' leftIcon='menu' rightIcon=''>
          <Navigation type='horizontal'>
            <Link href='/#/' icon='person' />
            <Link href='/#/addGame' active icon='add' />
          </Navigation>
        </AppBar>

        <Autocomplete
          direction="auto"
          label="Where was the game played?"
          hint=""
          multiple={false}
          onChange={this.handleLocationChange}
          source={locationNames}
          value={this.state.selectedLocation.l_name}
          showSuggestionsWhenValueIsSet={true}
        />
        
      </div>
    )

  }

  handleLocationChange(value){
    let locationObject = ""
    this.state.locations.forEach((location) => {
      if(location.l_name === value){
        locationObject = location
      }
    })
    this.setState({selectedLocation: locationObject});
  };

  findAllLocations(){
    this.apiCommunicatorHelper.allLocations((locations) => {
      this.setState({ locations: locations })
      this.setState({ selectedLocation: locations[1] })
    })
  }

  findAllLocationNames(){
    let locations = this.state.locations.map((location) => {
      return location.l_name
    })
    return locations
  }

}

export default AddGame 
