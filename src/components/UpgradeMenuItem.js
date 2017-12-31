import React from 'react'
import {LlamaActions} from '../modules/LlamaActions'
import MenuItem from './MenuItem'

export default class UpgradeMenuItem extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let actions = ([]);
    return <MenuItem primaryText='Upgrade' actions={actions} />
  }
}
