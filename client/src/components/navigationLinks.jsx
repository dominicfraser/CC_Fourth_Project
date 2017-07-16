import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/link'
import Drawer from 'react-toolbox/lib/drawer'

import { connect } from 'react-redux'
import { checkLoggedIn, checkDrawerIsActive } from '../actions/actionCreators'


class NavigationLinks extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    // this.props.checkAuthorised("http://localhost:3000/api/auth/checker")
  }

  render(){
console.log('this.props.isLoggedIn', this.props.isLoggedIn)
    let addGame = '/#/addGame'
    let profile = '/#/profile'

    return (
      <div>
        <AppBar title={this.props.appBarTitle} leftIcon='menu' onLeftIconClick={() => this.props.handleDrawerToggle(this.props.drawerIsActive)} >
          <Navigation type='horizontal'>
            <Link href='/#/login' icon='vpn_key' />
            <Link href={profile} icon='person' />
            <Link href='/#/' icon='insert_chart' />
            <Link href={addGame} icon='add' />
          </Navigation>
        </AppBar>

        <Drawer active={this.props.drawerIsActive}
        onOverlayClick={() => this.props.handleDrawerToggle(this.props.drawerIsActive)}>
          <h5>Drawer content stuff</h5>
          <p>stuffstuffstuff</p>
        </Drawer>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        drawerIsActive: state.drawerIsActive
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // checkAuthorised: () => dispatch(checkLoggedIn()),
        handleDrawerToggle: (toggleState) => dispatch(checkDrawerIsActive(!toggleState))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinks)