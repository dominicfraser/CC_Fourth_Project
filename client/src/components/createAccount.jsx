import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

import { connect } from 'react-redux'
import { createEmail, createPName, createPassword } from '../actions/actionCreators'

class CreateAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = { }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePNameChange = this.handlePNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.createAccountButton = this.createAccountButton.bind(this)
  }

  render(){

    return (
      <form>
        <Input type='text' label='Email' name='email' value={this.state.createEmail} onChange={this.handleEmailChange} required/>

        <Input type='text' label='Username' name='p-name' value={this.state.createPNname} onChange={this.handlePNameChange} required/>

        <Input type='text' label='Password' name='password' value={this.state.createPassword} onChange={this.handlePasswordChange} required/>

        <Button label='Create Account' href='/#/' onClick={this.createAccountButton} raised primary />
      </form>
      )
  }

  componentWillUnmount(){
    this.props.setCreateEmail("")
    this.props.setCreatePName("")
    this.props.setCreatePassword("")
  }

  handleEmailChange(value){
    this.props.setCreateEmail(value)
  }

  handlePNameChange(value){
    this.props.setCreatePName(value)
  }

  handlePasswordChange(value){
    this.props.setCreatePassword(value)
  }

  createAccountButton(){
    this.apiCommunicatorHelper.createAccount((submittedDetails) =>{
console.log('createAccount button callback return login', submittedDetails)
      }, (err) => {
console.log('err createAccountButton')
      }, JSON.stringify({
        email: this.props.createEmail,
        p_name: this.props.createPName,
        password: this.props.createPassword
    }))
  }

}
const mapStateToProps = (state) => {
    return {
        createEmail: state.createEmail,
        createPName: state.createPName,
        createPassword: state.createPassword
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCreateEmail: (email) => dispatch(createEmail(email)),
        setCreatePName: (p_name) => dispatch(createPName(p_name)),
        setCreatePassword: (password) => dispatch(createPassword(password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)