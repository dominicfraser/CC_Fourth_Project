import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
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
    this.signInButton = this.signInButton.bind(this)
  }

  render(){

    return (
      <div>
        <AppBar title='Table Tennis Tracker' leftIcon='menu' rightIcon=''>
          <Navigation type='horizontal'>
            <Link href='/#/' icon='person' />
            <Link href='/#/addGame' active icon='add' />
          </Navigation>
        </AppBar>

        <Input type='text' label='Username: Email' name='u-name' value={this.state.u_name} onChange={this.handleUsernameChange} required/>

        <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange} required/>

        <Button label='Sign In' href='/#/' onClick={this.signInButton} raised primary />

      </div>
    )
  }

  handleUsernameChange(value){
    this.setState({ u_name: value })
  }

  handlePasswordChange(value){
    this.setState({ password: password })
  }

  signInButton(){
console.log('pressed')
    // this.apiCommunicatorHelper.
  }


}

export default logIn