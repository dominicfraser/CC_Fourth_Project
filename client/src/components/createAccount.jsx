import React from 'react'
import ApiCommunicatorHelper from '../helpers/apiCommunicatorHelper'
import Input from 'react-toolbox/lib/input'
import Autocomplete from 'react-toolbox/lib/autocomplete'
import Button from 'react-toolbox/lib/button'

import { connect } from 'react-redux'
import { createEmail, createPName, createPassword, createSelectedPrimaryOrg, createSelectedPrimaryGroup, findAllOrgs, findAllGroups, allOrganisations, allGroups, allOrganisationsNames } from '../actions/actionCreators'

class CreateAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = { }
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
console.log('ORGNa', this.props.allOrganisationsNames.length > 0)
    let orgNames = []
    if(this.props.allOrganisationsNames.length > 0){
      let orgNames = this.props.allOrganisationsNames
console.log('in IF orgNames', orgNames)
    }

    const groupNames = []
console.log('orgNames', orgNames)

    return (
      <form>
        <Input type='text' label='Email' name='email' value={this.props.createEmail} onChange={this.handleEmailChange} required/>

        <Input type='text' label='Username' name='p-name' value={this.props.createPNname} onChange={this.handlePNameChange} required/>

        <Input type='text' label='Password' name='password' value={this.props.createPassword} onChange={this.handlePasswordChange} required/>

        <Autocomplete
          direction="auto"
          label="Primary Organisation"
          hint="start typing for autocomplete"
          multiple={false}
          // onChange={this.handlePrimaryOrgChange}
          source={orgNames}
          // value={this.props.createSelectedPrimaryOrg.o_name}
          showSuggestionsWhenValueIsSet={true}
          suggestionMatch="anywhere"
          required
        />

        <Autocomplete
          direction="auto"
          label="Primary Group"
          hint="start typing for autocomplete"
          multiple={false}
     //   onChange={this.handlePrimaryGroupChange}
          source={groupNames}
          // value={this.props.createSelectedPrimaryGroup.g_name}
          showSuggestionsWhenValueIsSet={true}
          suggestionMatch="anywhere"
          required
        />

        <Button label='Create Account' href='/#/' onClick={this.createAccountButton} raised primary />
      </form>
      )
  }

  componentWillUnmount(){
    this.props.setCreateEmail("")
    this.props.setCreatePName("")
    this.props.setCreatePassword("")
    this.props.setCreateSelectedPrimaryOrg("")
    this.props.setCreateSelectedPrimaryGroup("")
  }

  handleEmailChange(value){
    this.props.setCreateEmail(value)
  }

  handlePNameChange(value){
    this.props.setCreatePName(value)
  }

  handlePasswordChange(value){
    this.props.setCreatePassword(value)
  }

  handlePrimaryOrgChange(value){
    let orgObject = ""
    this.props.allOrganisations.forEach((organisation) => {
      if(organisation.o_name === value){
        orgObject = organisation
      }
    })
    this.props.setCreateSelectedPrimaryOrg(orgObject)
  }

  handlePrimaryGroupChange(value){
    this.props.setCreateSelectedPrimaryGroup(value)
  }

  createAccountButton(){
    this.apiCommunicatorHelper.createAccount((submittedDetails) =>{
console.log('createAccount button callback return login', submittedDetails)
      }, (err) => {
console.log('err createAccountButton')
      }, JSON.stringify({
        email: this.props.createEmail,
        p_name: this.props.createPName,
        password: this.props.createPassword,
        primary_org_id: this.props.createSelectedPrimaryOrg.id,
        primary_group_id: this.props.createSelectedPrimaryGroup.id
    }))
  }

}
const mapStateToProps = (state) => {
    return {
        createEmail: state.createEmail,
        createPName: state.createPName,
        createPassword: state.createPassword,
        createSelectedPrimaryOrg: state.createSelectedPrimaryOrg,
        createPrimaryGroupId: state.createSelectedPrimaryGroup,
        allOrganisations: state.allOrganisations,
        allGroups: state.allGroups,
        allOrganisationsNames: state.allOrganisationsNames,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCreateEmail: (email) => dispatch(createEmail(email)),
        setCreatePName: (p_name) => dispatch(createPName(p_name)),
        setCreatePassword: (password) => dispatch(createPassword(password)),
        setCreateSelectedPrimaryOrg: (primary_org) => dispatch(createSelectedPrimaryOrg(primary_org)),
        setCreateSelectedPrimaryGroup: (primary_group) => dispatch(createSelectedPrimaryGroup(primary_group)),
        findAllOrgs: () => dispatch(findAllOrgs()),
        findAllGroups: () => dispatch(findAllGroups())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)