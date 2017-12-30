import React from 'react'
import CareMenuItem from './CareMenuItem'

export default class LlamagotchiMenu extends React.Component {
  render () {
    return <div>
      <CareMenuItem uid={this.props.uid} />
    </div>
  }
}
