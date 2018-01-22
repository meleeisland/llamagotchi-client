import {LlamaStore} from './LlamaStore'
import {LlamaActions} from './LlamaActions'
import axios from 'axios'
export var LlamaRequests = {
  baseUrl: function () {
    let llamaserver = '0.0.0.0'
    if (process.env.LLAMASERVER !== undefined) llamaserver = process.env.LLAMASERVER
    return 'http://' + llamaserver + ':8080'
  },
  pet: function () {
    let s = LlamaStore.getState()
    let url = this.baseUrl() + '/pet/'
    axios.post(url, {
      uid: s.id,
      type: 'pet'
    }).then((response) => {
      if (response.error) console.log(false)
      LlamaActions.say('baah!')
    })
  },
  keepalive: function () {
    let s = LlamaStore.getState()
    axios.get(this.baseUrl() + '/keepalive/?uid=' + s.id).then((r) => { if (r.error) console.log(false) })
  },
  getHappiness: function () {
    let s = LlamaStore.getState()

    axios.get(this.baseUrl() + '/ghappy/?uid=' + s.id).then((response) => {
      if (response.error) console.log(false)
      if (response.data.data !== s.happiness) {
        LlamaStore.setHappiness(response.data.data)
      }
    })
  },
  login: function (u, p) {
    axios.post(this.baseUrl() + '/login/', {
      type: 'login',
      username: u,
      password: p
    }).then((response) => {
      if (response.error) console.log(false)
      let type = response.data.type
      if (type === 'new') {
        type = 'load'
      }
      if (type === 'load') {
        LlamaActions.login(response.data.uid, response.data.data)
      }
    })
  },
  register: function (u, p, e) {
    axios.post(this.baseUrl() + '/register/', {
      type: 'register',
      username: u,
      password: p,
      email: e
    }).then((response) => {
      if (response.error) console.log(false)
      LlamaActions.moveToPage('/', 'Registered')
    })
  }
}
