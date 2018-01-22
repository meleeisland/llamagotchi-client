import {LlamaStore} from './LlamaStore'
export var LlamaActions = {
  say: function (msg) {
    LlamaStore.setMsg(msg)
    setTimeout(() => { LlamaStore.setMsg('') }, 1500)
  },
  setHappiness: function (h) {
    LlamaStore.setHappiness(h)
  },
  moveToPage: function (url, name) {
    if (url !== false) {
      window.location.replace(url)
    }
  },
  login: function (id, name) {
    LlamaStore.setID(id, false)
    LlamaStore.setName(name)
  }

}
