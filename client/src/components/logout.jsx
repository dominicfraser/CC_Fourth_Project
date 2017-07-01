import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Button from 'react-toolbox/lib/button'

class Logout extends React.Component {
  constructor(props){
    super(props)

    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
    
    this.logoutButton = this.logoutButton.bind(this)
  }

  render(){
    return (
      <Button label='Log Out' href='/#/' onClick={this.logoutButton} raised />
    )
  }

  logoutButton(){
    this.apiCommunicatorHelper.logOut()
  }
}

export default Logout