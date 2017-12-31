import React from 'react'
import {LlamaActions} from '../modules/LlamaActions'
import MenuItem from './MenuItem'
import axios from 'axios'

export default class CareMenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.pet = this.pet.bind(this)
  }
  pet (e) {
    let url = 'http://localhost:8080/pet/'
    axios.post(url, {
      uid: this.props.uid,
      type: 'pet'
    }).then((response) => {
      if (response.error) console.log(false)
      LlamaActions.say('baah!')
    })
  }
  render () {
    let actions = ([ { onClick: this.pet, name: 'PET' } ]);
    return <MenuItem primaryText='Care' actions={actions} />
  }
}
