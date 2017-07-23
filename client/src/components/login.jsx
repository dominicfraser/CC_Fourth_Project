import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'
import ProgressBar from 'react-toolbox/lib/progress_bar'

import { connect } from 'react-redux'
import { isLoggedIn, loginUName, loginPassword } from '../actions/actionCreators'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = { }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.loginButton = this.loginButton.bind(this)
  }

  render(){
    return (
      <form>
        <Input type='text' label='Username' name='u-name' value={this.props.loginUName} onChange={this.handleUsernameChange} required/>

        <Input type='text' label='Password' name='password' value={this.props.loginPassword} onChange={this.handlePasswordChange} required/>

        <Button label='Log In' onClick={this.loginButton} raised primary />

      </form>
    )
  }

  componentWillUnmount(){
    this.props.setloginUName("")
    this.props.setloginPassword("")
  }

  handleUsernameChange(value){
    this.props.setloginUName(value)
  }

  handlePasswordChange(value){
    this.props.setloginPassword(value)
  }

  loginButton(){
    this.apiCommunicatorHelper.logIn((submittedDetails) => {
        this.props.isLoggedInTrue()
        this.props.propHistory.push('/')
    }, (err) => {
        this.props.isLoggedInFalse()
    }, JSON.stringify({
      u_name: this.props.loginUName,
      password: this.props.loginPassword
    }))
  }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        loginUName: state.loginUName,
        loginPassword: state.loginPassword
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedInTrue: () => dispatch(isLoggedIn(true)),
        isLoggedInFalse: () => dispatch(isLoggedIn(false)),
        setloginUName: (name) => dispatch(loginUName(name)),
        setloginPassword: (password) => dispatch(loginPassword(password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)