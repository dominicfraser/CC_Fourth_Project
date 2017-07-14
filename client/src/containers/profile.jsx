import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import NavigationLinks from '../components/navigationLinks'

import { connect } from 'react-redux'

class Profile extends React.Component {
  constructor(props){
    super(props)



    this.state = {}
  }

  componentWillMount(){
    if(!this.props.isLoggedIn){
      this.props.history.push('/login')
    }
  }

  render() {
    
    return (
        <div>
          <NavigationLinks appBarTitle='Profile'/>

          <p> Under Construction </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)