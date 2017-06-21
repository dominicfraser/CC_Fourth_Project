import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      u_name: "",
      password: ""
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.loginButton = this.loginButton.bind(this)
  }

  render(){
    return (
      <div>

        <Input type='text' label='Username: Email' name='u-name' value={this.state.u_name} onChange={this.handleUsernameChange} required/>

        <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange} required/>

        <Button label='Log In' href='/#/' onClick={this.loginButton} raised primary />

      </div>
    )
  }

  handleUsernameChange(value){
    this.setState({ u_name: value })
  }

  handlePasswordChange(value){

    this.setState({ password: value })
  }

  loginButton(){
    this.apiCommunicatorHelper.logIn((submittedDetails) => {
console.log('log in callback return login', submittedDetails)
    }, JSON.stringify({
      u_name: this.state.u_name,
      password: this.state.password
    }))
  }

}

export default Login