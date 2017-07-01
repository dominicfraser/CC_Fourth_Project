import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import NavigationLinks from '../components/navigationLinks'
import {Tab, Tabs} from 'react-toolbox'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'

import { connect } from 'react-redux'

class Leaderboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fixedIndex: 1,
      allPlayers: [],
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    
    this.handleFixedTabChange = this.handleFixedTabChange.bind(this)

    this.findAllPlayers()
  }

  render(){
// console.log('this.props.authIsLoading in leaderboard render', this.props.authIsLoading)
//CREATE AMOUNT WINS SORT
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
//CREATE WIN/LOSS SORT
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

//AUTH IS STILL LOADING PLACEHOLDER
let placeholder = <div></div>
if(this.props.authIsLoading){
  placeholder = <div>is loading</div>
}

    return (
      <div>
        <NavigationLinks appBarTitle='Leaderboard' />
        {placeholder}

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

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        authIsLoading: state.authIsLoading,
        drawerIsActive: state.drawerIsActive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)