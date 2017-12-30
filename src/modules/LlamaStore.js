export var LlamaStore = {
 
  _state : {
		  msg : "",
		  happiness : 0,
  },
  getState: function() {
    return this._state;
  },

  setMsg: function(msg) {
    this._state.msg = msg;
    this.onChange();
  },
  setHappiness: function(h) {
    this._state.happiness = h;
    this.onChange();
  },

  onChange: function() {}
};
