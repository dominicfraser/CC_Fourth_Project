import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'
import Drawer from 'react-toolbox/lib/drawer'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'



class NavigationLinks extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false,
      loggedIn: false
    }

    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)

    this.checkLoggedIn()
  }

  render(){

    let addGame = '/#/login'
    let profile = '/#/login'
    if(this.state.loggedIn){
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

        <Drawer active={this.state.active} onOverlayClick={this.handleDrawerToggle}>
          <h5>Drawer content stuff</h5>
          <p>stuffstuffstuff</p>
        </Drawer>
      </div>
    )
  }

  checkLoggedIn(){
    this.apiCommunicatorHelper.checkLoggedIn((check) => {
      if(check.description === 'user is logged in'){
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  handleDrawerToggle(){
    this.setState({active: !this.state.active})
  }

}

export default NavigationLinks