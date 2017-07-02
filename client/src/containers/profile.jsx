import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import NavigationLinks from '../components/navigationLinks'

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

export default Profile