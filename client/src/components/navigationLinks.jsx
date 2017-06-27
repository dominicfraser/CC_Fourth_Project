import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'
import Drawer from 'react-toolbox/lib/drawer'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'

import { connect } from 'react-redux';
import { checkLoggedIn } from '../actions/actionCreators';



class NavigationLinks extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active1: false,
    }

    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
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
        <AppBar title={this.props.appBarTitle} leftIcon='menu' onLeftIconClick={this.handleDrawerToggle} >
          <Navigation type='horizontal'>
            <Link href='/#/login' icon='vpn_key' />
            <Link href={profile} icon='person' />
            <Link href='/#/' icon='insert_chart' />
            <Link href={addGame} icon='add' />
          </Navigation>
        </AppBar>

        <Drawer active={this.state.active1} onOverlayClick={this.handleDrawerToggle}>
          <h5>Drawer content stuff</h5>
          <p>stuffstuffstuff</p>
        </Drawer>
      </div>
    )
  }


  handleDrawerToggle(){
    this.setState({active1: !this.state.active1})
  }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isLoading: state.authIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthorised: (url) => dispatch(checkLoggedIn(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinks);