import React from 'react'
import {LlamaRequests} from '../modules/LlamaRequests'
import MenuItem from './MenuItem'

export default class CareMenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.pet = this.pet.bind(this)
  }
  pet (e) {
    LlamaRequests.pet()
  }
  render () {
    let actions = ([ { onClick: this.pet, name: 'PET' } ])
    return <MenuItem primaryText='Care' actions={actions} />
  }
}
