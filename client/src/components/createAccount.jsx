import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Autocomplete from 'react-toolbox/lib/autocomplete'
import Button from 'react-toolbox/lib/button'

import { connect } from 'react-redux'
import { findAllOrgs, findAllGroups, allOrganisations, allGroups, allOrganisationsNames, allGroupsNames } from '../actions/actionCreators'

class CreateAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      p_name: "",
      email: "",
      password: "",
      primary_org: "",
      primary_group: ""
    }
    this.apiCommunicatorHelper = new ApiCommunicatorHelper()

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePNameChange = this.handlePNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePrimaryOrgChange = this.handlePrimaryOrgChange.bind(this)
    this.handlePrimaryGroupChange = this.handlePrimaryGroupChange.bind(this)
    this.createAccountButton = this.createAccountButton.bind(this)
  }

  componentDidMount(){
    this.props.findAllOrgs()
    this.props.findAllGroups()
  }

  render(){
    let orgNames = []
    if(this.props.allOrganisationsNames.length > 0){
      orgNames = this.props.allOrganisationsNames
    }

    let groupNames = []
    if(this.props.allGroupsNames.length > 0){
      groupNames = this.props.allGroupsNames
    }

    return (
      <form>
        <Input type='text' label='Email' name='email' value={this.state.email} onChange={this.handleEmailChange} required/>

        <Input type='text' label='Player Name' name='p-name' value={this.state.p_name} onChange={this.handlePNameChange} required maxLength={8}/>

        <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange} required/>

        <Autocomplete
          direction="auto"
          label="Primary Organisation"
          hint="start typing for autocomplete"
          multiple={false}
          onChange={this.handlePrimaryOrgChange}
          source={orgNames}
          value={this.state.primary_org.o_name}
          showSuggestionsWhenValueIsSet={true}
          suggestionMatch="anywhere"
          required
        />

        <Autocomplete
          direction="auto"
          label="Primary Group"
          hint="start typing for autocomplete"
          multiple={false}
          onChange={this.handlePrimaryGroupChange}
          source={groupNames}
          value={this.state.primary_group.g_name}
          showSuggestionsWhenValueIsSet={true}
          suggestionMatch="anywhere"
          required
        />

        <Button label='Create Account' href='/#/' onClick={this.createAccountButton} raised primary />
      </form>
      )
  }

  componentWillUnmount(){
  }

  handleEmailChange(value){
    this.setState({ email: value })
  }

  handlePNameChange(value){
    this.setState({ p_name: value })
  }

  handlePasswordChange(value){
    this.setState({ password: value })
  }

  handlePrimaryOrgChange(value){
    let orgObject = ""
    this.props.allOrganisations.forEach((organisation) => {
      if(organisation.o_name === value){
        orgObject = organisation
      }
    })
    this.setState({ primary_org: orgObject })
  }

  handlePrimaryGroupChange(value){
    let groupObject = ""
    this.props.allGroups.forEach((group) => {
      if(group.g_name === value){
        groupObject = group
      }
    })
    this.setState({ primary_group: groupObject })
  }

  createAccountButton(){
   this.apiCommunicatorHelper.createAccount((submittedDetails) =>{
   console.log('createAccount button callback return login', submittedDetails)
         }, (err) => {
   console.log('err createAccountButton')
         }, JSON.stringify({
           email: this.state.email,
           rating: 0,
           p_name: this.state.p_name,
           password: this.state.password,
           primary_org_id: this.state.primary_org.id,
           primary_group_id: this.state.primary_group.id
       }))
     }
}

const mapStateToProps = (state) => {
    return {
        allOrganisations: state.allOrganisations,
        allGroups: state.allGroups,
        allOrganisationsNames: state.allOrganisationsNames,
        allGroupsNames: state.allGroupsNames,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        findAllOrgs: () => dispatch(findAllOrgs()),
        findAllGroups: () => dispatch(findAllGroups()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)