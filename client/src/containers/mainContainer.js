import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Leaderboard from './leaderboard'
import AddGame from './addGame'
import Profile from './profile'
import LoginPage from './loginPage'

class MainContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    this.checkLoggedIn = this.checkLoggedIn.bind(this)
    this.checkLoggedIn()
  }

  render(){
    const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return (
        React.createElement(component, finalProps)
      );
    }

    const PropsRoute = ({ component, ...rest }) => {
      return (
        <Route {...rest} render={routeProps => {
          return renderMergedProps(component, routeProps, rest);
        }}/>
      );
    }

    const PrivateRoute = ({ component, ...rest }) => {
      return (
        <Route {...rest} render={routeProps => {
          return this.state.loggedIn ? (
            renderMergedProps(component, routeProps, rest)
          ) : (
            <Redirect to={{
              pathname: '/',
              state: { from: routeProps.location }
            }}/>
          );
        }}/>
      );
    };


    return(
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Leaderboard} />
            <PrivateRoute path='/addGame' 
              component={AddGame} 
              auth={this.state.loggedIn} /> 
            <PrivateRoute path='/profile' 
              component={Profile} 
              auth={this.state.loggedIn}/> 
            <PropsRoute path='/login' 
              component={LoginPage} 
              auth={this.state.loggedIn} 
              checkLoggedIn={this.checkLoggedIn} /> 
          </Switch>
        </HashRouter>
      )

  }

  // <Route path='/main' component={Leaderboard} />
  //         <Route exact path='/' component={Leaderboard} />
  checkLoggedIn(){
console.log('IN CHECK LOGGED IN')
    this.apiCommunicatorHelper.checkLoggedIn((check) => {
      if(check.description === 'user is logged in'){
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

}


export default MainContainer
