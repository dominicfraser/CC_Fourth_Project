import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

class CreateAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      u_name: "",
      password: ""
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.createAccountButton = this.createAccountButton.bind(this)
  }

  render(){

    return (
      <form>
        <Input type='text' label='Username: Email' name='u-name' value={this.state.u_name} onChange={this.handleUsernameChange} required/>

        <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange} required/>

        <Button label='Create Account' href='/#/' onClick={this.createAccountButton} raised primary />
      </form>
      )
  }

  handleUsernameChange(value){
    this.setState({ u_name: value })
  }

  handlePasswordChange(value){

    this.setState({ password: value })
  }

  createAccountButton(){
    this.apiCommunicatorHelper.createAccount((submittedDetails) =>{
console.log('createAccount button callback return login', submittedDetails)
      }, (err) => {
console.log('err createAccountButton')
      }, JSON.stringify({
        u_name: this.state.u_name,
        password: this.state.password
    }))
  }

}

export default CreateAccount