import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      u_name: "",
      password: "",
      attemptingLogin: false
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.loginButton = this.loginButton.bind(this)
  }

  render(){
    let spinner = <p></p>
    if(this.state.attemptingLogin){
      spinner = <p>spinner</p>
    }

    return (
      <form>
        {spinner}
        <Input type='text' label='Username: Email' name='u-name' value={this.state.u_name} onChange={this.handleUsernameChange} required/>

        <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange} required/>

        <Button label='Log In' onClick={this.loginButton} raised primary />

      </form>
    )
  }

  handleUsernameChange(value){
    this.setState({ u_name: value })
  }

  handlePasswordChange(value){
    this.setState({ password: value })
  }

  loginButton(){
    this.setState({ attemptingLogin: true })

    this.apiCommunicatorHelper.logIn((submittedDetails) => {
console.log('log in callback return login', submittedDetails)
      this.props.propHistory.push('/')
      this.setState({ attemptingLogin: false })

    }, (err) => {
      this.setState({ attemptingLogin: false })

    }, JSON.stringify({
      u_name: this.state.u_name,
      password: this.state.password
    }))
  }

}

export default Login