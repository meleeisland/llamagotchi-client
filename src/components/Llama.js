import React from 'react'
import LoggedLlama from './LoggedLlama'
import {LlamaStore} from '../modules/LlamaStore'
import {LlamaRequests} from '../modules/LlamaRequests'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export default class Llama extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getStateFromStore()
    this.onChange = this.onChange.bind(this)
    this.login = this.login.bind(this)
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
  login (e) {
    e.preventDefault()
    let u = (e.target.querySelector('input[name="username"]'))
    let p = (e.target.querySelector('input[name="password"]'))
    LlamaRequests.login(u.value, p.value)
  }
  render () {
    if (this.state.id === false) {
      return (<Card>
        <CardMedia overlay={<CardTitle title='Login' subtitle='logga al lama' />}>
          <img src='http://via.placeholder.com/750x350' />
        </CardMedia>
        <form onSubmit={this.login}>
          <CardText>
            <input type='text' name='username' />
            <input type='password' name='password' />
          </CardText>
          <CardActions>
            <input className='waves-effect waves-light btn' type='submit' />
          </CardActions>
        </form>
      </Card>

      )
    } else {
      return <LoggedLlama name={this.state.name} />
    }
  }
}
