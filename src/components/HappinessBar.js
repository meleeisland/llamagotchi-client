import React from 'react'
import {LlamaStore} from '../modules/LlamaStore'
import CircularProgress from 'material-ui/CircularProgress'

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
  componentDidMount () {
    LlamaStore.onChange = this.onChange
  }
  render () {
    let h = parseInt(this.state.happiness)
    if (isNaN(h)) h = 0
    return <div style={{'position': 'relative'}}>
      <i style={{'position': 'absolute', 'left': '8px', 'top': '8px'}} className='material-icons'>child_care</i>
      <CircularProgress
        mode='determinate'
        value={h}
      />
    </div>
  }
}
