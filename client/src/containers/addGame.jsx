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
      selectedLocation: "",
      players: [],
      selectedPlayer1: ""
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    this.findAllLocations()
    this.findAllPlayers()

    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handlePlayer1Change = this.handlePlayer1Change.bind(this)
  }

  render(){

    const locationNames = this.findAllLocationNames()
    const playerNames = this.findAllPlayerNames()

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
          label="Player 1"
          hint="start typing for autocomplete"
          multiple={false}
          onChange={this.handlePlayer1Change}
          source={playerNames}
          value={this.state.selectedPlayer1.p_name}
          showSuggestionsWhenValueIsSet={true}
          suggestionMatch="anywhere"
        />

        <Autocomplete
          direction="auto"
          label="Where was the game played?"
          hint="start typing for autocomplete"
          multiple={false}
          onChange={this.handleLocationChange}
          source={locationNames}
          value={this.state.selectedLocation.l_name}
          showSuggestionsWhenValueIsSet={true}
        />
        
      </div>
    )

  }
//LOCATION
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

//PLAYERS
  handlePlayer1Change(value){
    let playerObject = ""
    this.state.players.forEach((player) => {
      if(player.p_name === value){
        playerObject = player
      }
    })
    this.setState({selectedPlayer1: playerObject});
  };
  findAllPlayers(){
    this.apiCommunicatorHelper.allPlayersWithStats((players) => {
      this.setState({ players: players })
    })
  }
  findAllPlayerNames(){
    let players = this.state.players.map((player) => {
      return player.p_name
    })
    return players
  }

}

export default AddGame 
