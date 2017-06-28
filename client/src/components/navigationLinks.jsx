import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'
import Drawer from 'react-toolbox/lib/drawer'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

import { connect } from 'react-redux';
import { checkLoggedIn, checkDrawerIsActive } from '../actions/actionCreators';



class NavigationLinks extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }

    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

  }

  componentDidMount(){
console.log('props in navigationLinks', this.props)

    this.props.checkAuthorised("http://localhost:3000/api/auth/checker")
  }


  render(){
    let addGame = '/#/login'
    let profile = '/#/login'
    if(this.props.isLoggedIn){
      addGame = '/#/addGame'
      profile = '/#/profile'
    } 

    return (
      <div>
        <AppBar title={this.props.appBarTitle} leftIcon='menu' onLeftIconClick={this.props.handleDrawerToggle} >
          <Navigation type='horizontal'>
            <Link href='/#/login' icon='vpn_key' />
            <Link href={profile} icon='person' />
            <Link href='/#/' icon='insert_chart' />
            <Link href={addGame} icon='add' />
          </Navigation>
        </AppBar>

        <Drawer active={this.props.drawerIsActive.drawerIsActive} onOverlayClick={this.props.handleDrawerToggle}>
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
        authIsLoading: state.authIsLoading,
        drawerIsActive: state.drawerIsActive
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthorised: () => dispatch(checkLoggedIn()),
        handleDrawerToggle: () => dispatch(checkDrawerIsActive())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinks);