export var LlamaStore = {

  _state: {
    pageTitle: 'Title',
    msg: '',
    happiness: 0,
    id: false,
    name: ''
  },
  getState: function () {
    return this._state
  },

  setMsg: function (msg) {
    this._state.msg = msg
    this.onChange()
  },

  setID: function (id, trigger = true) {
    this._state.id = id
    if (trigger) {
      this.onChange()
    }
  },
  setName: function (name, trigger = true) {
    this._state.name = name
    if (trigger) {
      this.onChange()
    }
  },
  setHappiness: function (h) {
    this._state.happiness = h
    this.onChange()
  },

  onChange: function () {}
}
