import React from 'react'
import MenuItem from './MenuItem'

export default class UpgradeMenuItem extends React.Component {
  render () {
    let actions = ([])
    return <MenuItem primaryText='Upgrade' actions={actions} />
  }
}
