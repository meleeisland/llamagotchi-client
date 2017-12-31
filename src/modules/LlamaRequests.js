import {LlamaStore} from './LlamaStore'
import {LlamaActions} from './LlamaActions'
import axios from 'axios'
export var LlamaRequests = {
	pet : function () {
		let s = LlamaStore.getState();
		let url = 'http://localhost:8080/pet/'
		axios.post(url, {
		  uid: s.id,
		  type: 'pet'
		}).then((response) => {
		  if (response.error) console.log(false)
		  LlamaActions.say('baah!')
		})
	},
	keepalive : function () {
		let s = LlamaStore.getState();
		axios.get('http://localhost:8080/keepalive/?uid=' +  s.id).then((r) => { if (r.error) console.log(false) })
	},
	getHappiness : function () {
		let s = LlamaStore.getState();
			
		axios.get('http://localhost:8080/ghappy/?uid=' + s.id).then((response) => {
		  if (response.error) console.log(false)
		  if (response.data.data !== s.happiness) {
			LlamaStore.setHappiness(response.data.data)
		  }
		})
	},
	login : function (u,p) {
		axios.post('http://localhost:8080/login/', {
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
	}
}
