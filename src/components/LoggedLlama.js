import React from 'react'
import axios from 'axios'
import HappinessBar from './HappinessBar'
import LlamagotchiMenu from './LlamagotchiMenu'
import LlamaupgradeMenu from './LlamaupgradeMenu'
import {LlamaStore} from '../modules/LlamaStore'

export default class LoggedLlama extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getStateFromStore()
    this.refresh = this.refresh.bind(this)
    this.onChange = this.onChange.bind(this)
    this.refresh()
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
  refresh (e) {
    axios.get('http://localhost:8080/keepalive/?uid=' + this.props.uid).then((r) => { if (r.error) console.log(false) })
    axios.get('http://localhost:8080/ghappy/?uid=' + this.props.uid).then((response) => {
      if (response.error) console.log(false)
      if (response.data.data !== this.state.happiness) {
        LlamaStore.setHappiness(response.data.data)
      }
    })
    setTimeout(() => { this.refresh(e) }, 1000)
  }

  render () {
    let llama = []
    if (this.state.msg !== '') llama.push(<div key='say' style={{'width': '100px', 'position': 'absolute', 'top': '12.5%', 'left': '14%'}}><img style={{'width': '100%'}}src='/img/balloon.png' /><span style={{'position': 'absolute', 'left': '25%', 'top': '25%'}}>{this.state.msg}</span></div>)
    llama.push(<img key='llama' style={{'marginLeft': '110px'}} src='/img/llama.png' />)
    return <div>
      <h2>{this.props.name}</h2>
      {llama}
      <HappinessBar />
      <LlamagotchiMenu uid={this.props.uid} />
      <LlamaupgradeMenu uid={this.props.uid} />
    </div>
  }
}
