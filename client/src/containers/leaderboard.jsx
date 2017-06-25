import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import NavigationLinks from '../components/navigationLinks'
import {Tab, Tabs} from 'react-toolbox'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'
import Drawer from 'react-toolbox/lib/drawer'


class Leaderboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false,
      fixedIndex: 1,
      allPlayers: [],
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    
    this.handleFixedTabChange = this.handleFixedTabChange.bind(this)
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)

    this.findAllPlayers()
  }

  render(){
    const playerListItemsSortedAmountWins = this.state.allPlayers.sort(this.sortByAmountWins)
    const playerListItemsAmountWins = playerListItemsSortedAmountWins.map((player, index) => {
      return ( 
          <ListItem
          key={index}
          avatar='./public/img/ic_account_circle_white_24px.svg'
          caption={player.p_name}
          // leftActions={[<p key={0}>{player.win_ratio_ratio()}</p>]}
          rightActions={[<p key={0}>Total Wins: {player.wins}</p>]}
          // legend={player.id}
          // rightIcon='star'
        />
      )
    })

    const playerListItemsSortedRatioPercent = this.state.allPlayers.sort(this.sortByWinRatioPercentage)
    const playerListItemsWinLoss = playerListItemsSortedRatioPercent.map((player, index) => {
      return ( 
          <ListItem
          key={index}
          avatar='./public/img/ic_account_circle_white_24px.svg'
          caption={player.p_name}
          rightActions={[<p key={0}>W/L Ratio: {player.win_ratio_ratio()}</p>]}
        />
      )
    })

    return (
      <div>
        <AppBar title='Leaderboard' leftIcon='menu' onLeftIconClick={this.handleDrawerToggle} rightIcon=''>
          <NavigationLinks />
        </AppBar>

        <Drawer active={this.state.active} onOverlayClick={this.handleDrawerToggle}>
          <h5>Drawer content stuff</h5>
          <p>stuffstuffstuff</p>
        </Drawer>

        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label='Wins'>
            <List selectable ripple>
              <ListSubHeader caption='Total Wins' />
              {playerListItemsAmountWins}
              <ListDivider />

            </List>
          </Tab>

          <Tab label='W/L'>
            <List selectable ripple>
                <ListSubHeader caption='Win/Loss Ratio' />
                {playerListItemsWinLoss}
                <ListDivider />
                <ListSubHeader caption='Biggest Win Streak' />
                <ListItem caption='Person' leftIcon='send' />
              </List>
          </Tab>

          <Tab label='Rating' disabled>
            <small>Third Content</small>
          </Tab>
        </Tabs>
      </div>
    )

  }

  componentDidMount(){
  }

  handleDrawerToggle(){
    this.setState({active: !this.state.active})
  }

  handleFixedTabChange(index){
    this.setState({fixedIndex: index});
  }

  findAllPlayers(){
    this.apiCommunicatorHelper.allPlayersWithStats((players) => {
      this.setState({ allPlayers: players })
    })
  }

  sortByWinRatioPercentage(a, b){
    if (a.win_ratio_percentage() > b.win_ratio_percentage()) return -1;
    if (a.win_ratio_percentage() < b.win_ratio_percentage()) return 1;
    return 0;
  }

  sortByAmountWins(a, b){
    if (a.wins > b.wins) return -1;
    if (a.wins < b.wins) return 1;
    return 0;
  }

}

export default Leaderboard