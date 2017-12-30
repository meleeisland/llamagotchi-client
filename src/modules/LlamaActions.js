import {LlamaStore} from "./LlamaStore"
export var LlamaActions =  {
	say: function(msg) {
		console.log("say " + msg);
		LlamaStore.setMsg(msg);
		setTimeout(function() {LlamaStore.setMsg("")},1500);
	}
					  
}

