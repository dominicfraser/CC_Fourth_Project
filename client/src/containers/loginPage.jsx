import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import NavigationLinks from '../components/navigationLinks'
import Login from '../components/login'
import Logout from '../components/logout'
import CreateAccount from '../components/createAccount'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

class LoginPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    return (
      <div>
        <NavigationLinks appBarTitle='Table Tennis Tracker' auth={this.props.auth} />

        <Login checkLoggedIn={this.props.checkLoggedIn} />
        <Logout checkLoggedIn={this.props.checkLoggedIn} />
        <CreateAccount />

      </div>
    )
  }


}

export default LoginPage