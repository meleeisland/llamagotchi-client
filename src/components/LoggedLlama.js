import React from 'react'
import HappinessBar from './HappinessBar'
import LlamagotchiMenu from './LlamagotchiMenu'
import LlamaupgradeMenu from './LlamaupgradeMenu'
import PropTypes from 'prop-types'
import {List} from 'material-ui/List'
import {LlamaStore} from '../modules/LlamaStore'
import {LlamaRequests} from '../modules/LlamaRequests'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'

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
    LlamaRequests.keepalive()
    LlamaRequests.getHappiness()
    setTimeout(() => { this.refresh(e) }, 1000)
  }

  render () {
    let llama = []
    if (this.state.msg !== '') llama.push(<div key='say' style={{'width': '100px', 'position': 'absolute', 'top': '0', 'left': '60%'}}><img style={{'width': '100%'}}src='/img/balloon.png' /><span style={{'position': 'absolute', 'left': '25%', 'top': '25%'}}>{this.state.msg}</span></div>)
    llama.push(<img style={{'position': 'relative', 'left': '80%'}} key='llama' src='/img/llama.png' />)
    return <div className='col s12'>
      <Card>
        <CardTitle title={this.props.name} subtitle='baaah!' />
        <HappinessBar />
        <CardText style={{'position': 'relative'}}>
          {llama}
        </CardText>
        <CardActions>
          <List>
            <LlamagotchiMenu />
            <LlamaupgradeMenu />
          </List>
        </CardActions>
      </Card>
    </div>
  }
}

LoggedLlama.propTypes = {
  name: PropTypes.string.isRequired
}
