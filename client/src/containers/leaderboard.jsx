import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'
import {Tab, Tabs} from 'react-toolbox'


class Leaderboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fixedIndex: 1,
      locations: []
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    this.handleFixedTabChange = this.handleFixedTabChange.bind(this)

    this.findAllLocations()
  }

  render(){

    return (
        <div>
          <AppBar title='Table Tennis Tracker' leftIcon='menu' rightIcon=''>
            <Navigation type='horizontal'>
              <Link href='/#/' icon='person' />
              <Link href='/#/addGame' icon='add' />
            </Navigation>
          </AppBar>
          <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
            <Tab label='Wins' disabled><small>First Content</small></Tab>
            <Tab label='W/L'>
              <small>Second Content</small>
              <p> test </p>
            </Tab>
            <Tab label='Rating' disabled><small>Third Content</small></Tab>
          </Tabs>
        </div>
      )

  }

  componentDidMount(){
  }

  handleFixedTabChange(index){
    this.setState({fixedIndex: index});
  }

  findAllLocations(){
    this.apiCommunicatorHelper.allLocations((locations) => {
      this.setState({ locations: locations })
  console.log('locations in leaderboard', locations)
    })
  }


}

export default Leaderboard 
