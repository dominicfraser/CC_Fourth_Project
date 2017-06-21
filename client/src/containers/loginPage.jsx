import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
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
        <AppBar title='Table Tennis Tracker' leftIcon='menu' rightIcon=''>
          <NavigationLinks />
        </AppBar>

        <Login />
        <Logout />
        <CreateAccount />

      </div>
    )
  }


}

export default LoginPage