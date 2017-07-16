import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

import { connect } from 'react-redux'

class Profile extends React.Component {
  constructor(props){
    super(props)



    this.state = {}
  }


  render() {
    
    return (
        <div>

          <p> Under Construction </p>
        </div>
      )
  }

}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)