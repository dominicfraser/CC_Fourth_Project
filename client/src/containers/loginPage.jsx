import React from 'react'
import { connect } from 'react-redux'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import NavigationLinks from '../components/navigationLinks'
import Login from '../components/login'
import Logout from '../components/logout'
import CreateAccount from '../components/createAccount'
import Input from 'react-toolbox/lib/input'
import Button from 'react-toolbox/lib/button'

class LoginPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    let login = <p></p>
    if(!this.props.isLoggedIn){
      login = <Login propHistory={this.props.history}/>
    }
    let logout = <Logout />
    if(!this.props.isLoggedIn){
      logout = <p></p>
    }

    return (
      <div>
        <NavigationLinks appBarTitle='Table Tennis Tracker'/>

        {login}
        {logout}
        <CreateAccount />

      </div>
    )
  }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        authIsLoading: state.authIsLoading,
        drawerIsActive: state.drawerIsActive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)