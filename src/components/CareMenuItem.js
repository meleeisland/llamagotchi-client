import React from 'react'
import {LlamaActions} from '../modules/LlamaActions'
import Divider from 'material-ui/Divider'
import {ListItem} from 'material-ui/List'
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
    let actions = ([ { onClick: this.pet, name: 'PET' } ])
    return <ListItem primaryText='Care' nestedItems={actions.map((item, i) => {
      if (item.name === 'divider') return <Divider key={'div-' + i} />
      if (item.icon !== undefined) return <ListItem onClick={item.onClick} key={'el-ico-' + i} primaryText={item.name} />
      return <ListItem onClick={item.onClick} key={'el-' + i} primaryText={item.name} />
    })} />
  }
}
