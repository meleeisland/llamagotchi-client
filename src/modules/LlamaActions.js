import {LlamaStore} from './LlamaStore'
export var LlamaActions = {
  say: function (msg) {
    LlamaStore.setMsg(msg)
    setTimeout(function () { LlamaStore.setMsg('') }, 1500)
  },
  setHappiness: function (h) {
    LlamaStore.setHappiness(h)
  }

}
