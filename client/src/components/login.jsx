import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'
import ProgressBar from 'react-toolbox/lib/progress_bar'

import { connect } from 'react-redux'
import { isLoggedIn } from '../actions/actionCreators'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      u_name: "",
      password: "",
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.loginButton = this.loginButton.bind(this)
  }

  render(){
    return (
      <form>
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
    this.apiCommunicatorHelper.logIn((submittedDetails) => {
        this.props.isLoggedInTrue()
        this.props.propHistory.push('/')
    }, (err) => {
        this.props.isLoggedInFalse()
    }, JSON.stringify({
      u_name: this.state.u_name,
      password: this.state.password
    }))
  }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedInTrue: () => dispatch(isLoggedIn(true)),
        isLoggedInFalse: () => dispatch(isLoggedIn(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)