import {LlamaStore} from './LlamaStore'
export var LlamaActions = {
  say: function (msg) {
    LlamaStore.setMsg(msg)
    setTimeout(() => { LlamaStore.setMsg('') }, 1500)
  },
  setHappiness: function (h) {
    LlamaStore.setHappiness(h)
  },
  login: function (id, name) {
    LlamaStore.setID(id, false)
    LlamaStore.setName(name)
  }

}
