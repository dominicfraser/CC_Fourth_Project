import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import NavigationLinks from '../components/NavigationLinks'
import Link from 'react-toolbox/lib/Link'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

class logIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      u_name: "",
      password: ""
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.logInButton = this.logInButton.bind(this)
    this.logOutButton = this.logOutButton.bind(this)
  }

  render(){

    return (
      <div>
        <AppBar title='Table Tennis Tracker' leftIcon='menu' rightIcon=''>
          <NavigationLinks />
        </AppBar>

        <Input type='text' label='Username: Email' name='u-name' value={this.state.u_name} onChange={this.handleUsernameChange} required/>

        <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange} required/>

        <Button label='Log In' href='/#/' onClick={this.logInButton} raised primary />

        <Button label='Log Out' href='/#/login' onClick={this.logOutButton} raised />

      </div>
    )
  }

  handleUsernameChange(value){
    this.setState({ u_name: value })
  }

  handlePasswordChange(value){

    this.setState({ password: value })
  }

  logInButton(){
    this.apiCommunicatorHelper.logIn((submittedDetails) => {
console.log('log in callback return login', submittedDetails)
    }, JSON.stringify({
      u_name: this.state.u_name,
      password: this.state.password
    }))
  }

  logOutButton(){
    this.apiCommunicatorHelper.logOut()
  }


}

export default logIn