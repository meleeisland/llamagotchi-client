import React from 'react'
import {LlamaStore} from '../modules/LlamaStore'

export default class HappinessBar extends React.Component {
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
  render () {
    return <div style={{'width': '250px', 'float': 'left', 'height': '20px', 'border': '1px solid', 'borderRadius': '5px'}} >
      <div style={{'width': this.state.happiness + '%', 'background': 'green', 'float': 'left', 'height': '100%'}} />
    </div>
  }
}
