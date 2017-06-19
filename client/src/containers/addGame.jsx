import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'

class AddGame extends React.Component {
  constructor(props){
    super(props)
    this.state ={

    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

  }

  render(){
    return (
        <div>
          <AppBar title='Table Tennis Tracker' leftIcon='menu' rightIcon=''>
            <Navigation type='horizontal'>
              <Link href='/#/' icon='person' />
              <Link href='/#/addGame' active icon='add' />
            </Navigation>
          </AppBar>
          
          <p>content</p>
        </div>
      )

  }


}

export default AddGame 
