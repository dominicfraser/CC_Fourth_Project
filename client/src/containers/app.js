import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router'

import NavigationLinks from '../components/navigationLinks'

import Leaderboard from '../containers/leaderboard'
import AddGame from '../containers/addGame'
import Profile from '../containers/profile'
import LoginPage from '../containers/loginPage'

import { connect } from 'react-redux'
import { checkLoggedIn, checkDrawerIsActive } from '../actions/actionCreators'


class App extends React.Component {

  render(){
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={routeProps => (
          this.props.isLoggedIn ? ( 
              <Component {...routeProps}/> 
            ) : (
              <Redirect to='/login'/>
            ) 
        )}/> 
      )

    return(
        <HashRouter history={browserHistory} >
          <div>
            <NavigationLinks appBarTitle='Table Tennis Tracker' />

            <Route path='/main' component={Leaderboard} />
            <Route exact path='/' component={Leaderboard} />
            <PrivateRoute path='/addGame' component={AddGame} />
            <PrivateRoute path='/profile' component={Profile} />
            <Route path='/login' component={LoginPage} />
          </div>
        </HashRouter>
      )
  }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        authIsLoading: state.authIsLoading,
        // drawerIsActive: state.drawerIsActive
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // checkAuthorised: () => dispatch(checkLoggedIn()),
        // handleDrawerToggle: (toggleState) => dispatch(checkDrawerIsActive(!toggleState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)