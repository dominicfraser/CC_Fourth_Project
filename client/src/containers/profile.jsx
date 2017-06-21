import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import NavigationLinks from '../components/navigationLinks'

class Profile extends React.Component {
  constructor(props){
    super(props)



    this.state = {}
  }

  render() {

    return (
        <div>
          <AppBar title='Profile' leftIcon='menu' rightIcon=''>
            <NavigationLinks />
          </AppBar>

          <p> Under Construction </p>
        </div>
      )
  }


}

export default Profile