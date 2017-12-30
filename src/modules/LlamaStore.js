export var LlamaStore = {
 
  _state : {
		  msg : ""
  },
  getState: function() {
    return this._state;
  },

  setMsg: function(msg) {
    this._state.msg = msg;
    this.onChange();
  },

  onChange: function() {}
};
