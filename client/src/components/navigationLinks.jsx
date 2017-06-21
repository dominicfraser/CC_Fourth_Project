import React from 'react'
import Navigation from 'react-toolbox/lib/navigation'
import Link from 'react-toolbox/lib/Link'


const NavigationLinks = function(props){

  return (
    <Navigation type='horizontal'>
      <Link href='/#/' icon='person' />
      <Link href='/#/' icon='insert_chart' />
      <Link href='/#/addGame' icon='add' />
    </Navigation>
  )
}

export default NavigationLinks