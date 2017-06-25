import React from 'react'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'



class NavigationLinks extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false
    }

    this.apiCommunicatorHelper = new ApiCommunicatorHelper()
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
      <Navigation type='horizontal'>
        <Link href='/#/login' icon='vpn_key' />
        <Link href={profile} icon='person' />
        <Link href='/#/' icon='insert_chart' />
        <Link href={addGame} icon='add' />
      </Navigation>
    )
  }

  checkLoggedIn(){
console.log('in checkLoggedIn in navigation')
    this.apiCommunicatorHelper.checkLoggedIn((check) => {
      if(check.description === 'user is logged in'){
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

}

export default NavigationLinks