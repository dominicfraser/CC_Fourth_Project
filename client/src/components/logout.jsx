import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Button from 'react-toolbox/lib/button'

import { connect } from 'react-redux'
import { isLoggedIn } from '../actions/actionCreators'

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
    this.props.isLoggedInFalse()
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedInFalse: () => dispatch(isLoggedIn(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)