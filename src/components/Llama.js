import React from 'react'
import axios from 'axios'
import LoggedLlama from './LoggedLlama'
import {LlamaActions} from '../modules/LlamaActions'
import {LlamaStore} from '../modules/LlamaStore'

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
    axios.post('http://localhost:8080/login/', {
      type: 'login',
      username: u.value,
      password: p.value
    }).then((response) => {
      if (response.error) console.log(false)
      let type = response.data.type
      console.log(response)
      if (type === 'new') {
        type = 'load'
      }
      if (type === 'load') {
        LlamaActions.login(response.data.uid, response.data.data)
      }
    })
  }
  render () {
    if (this.state.id === false) {
      return (
        <form onSubmit={this.login}>
          <input type='text' name='username' />
          <input type='password' name='password' />
          <input type='submit' />
        </form>
      )
    } else {
      return <LoggedLlama name={this.state.name} />
    }
  }
}
