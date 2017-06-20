import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'
import {Tab, Tabs} from 'react-toolbox'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'


class Leaderboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fixedIndex: 1,
      allPlayers: [],
      locations: []
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    this.handleFixedTabChange = this.handleFixedTabChange.bind(this)

    this.findAllLocations()
    this.findAllPlayers()
  }

  render(){
    const playerListItems = this.state.allPlayers.map((player, index) => {
      return ( 
          <ListItem
          key={index}
          avatar='./public/img/ic_account_circle_white_24px.svg'
          caption={player.p_name}
          leftActions={[<p key={0}>{player.win_ratio_ratio()}</p>]}
          rightActions={[<p key={0}>right</p>]}
          // legend={player.id}
          rightIcon='star'
        />
      )
    })

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
              <List selectable ripple>
                  <ListSubHeader caption='Win/Loss Ratio' />
                  {playerListItems}
                  <ListDivider />
                  <ListSubHeader caption='Biggest Win Streak' />
                  <ListItem caption='Person' leftIcon='send' />
                </List>
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
    })
  }

  findAllPlayers(){
    this.apiCommunicatorHelper.allPlayersWithStats((players) => {
      this.setState({ allPlayers: players })
    })
  }


}

export default Leaderboard 
