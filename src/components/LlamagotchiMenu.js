import React from 'react'
import CareMenuItem from './CareMenuItem'
import {LlamaStore} from '../modules/LlamaStore'

export default class LlamagotchiMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getStateFromStore()
    this.onChange = this.onChange.bind(this)
  }
  getStateFromStore () {
    return LlamaStore.getState()
  }
  onChange () {
    this.setState(this.getStateFromStore())
  }
  componentDidMount () {
    LlamaStore.onChange = this.onChange
  }
  render () {
    return <CareMenuItem uid={this.state.id} />
  }
}
