import React from 'react';
import axios from 'axios';
import HappinessBar from './HappinessBar';
import LlamagotchiMenu from './LlamagotchiMenu';
import LlamaupgradeMenu from './LlamaupgradeMenu';



export default class LoggedLlama extends React.Component {
	 constructor(props) { 
		 super(props); 
		 this.state = {
			 happiness : 0
		 }
		 this.refresh = this.refresh.bind(this);
		 this.refresh();
	 }
	
	refresh(e){
		axios.get("http://localhost:8080/keepalive/?uid=" + this.props.uid).then(
			(response) =>  {
				if (response.error) console.log(false);
				console.log(response.data)
			}) ;
		axios.get("http://localhost:8080/ghappy/?uid=" + this.props.uid).then(
			(response) =>  {
				if (response.error) console.log(false);
				console.log(response.data)
				let type = response.data.type
				this.setState({ happiness : response.data.data })
			}) ;
		 var self = this;
		 setTimeout(function() {self.refresh(e);},1000);
	}
	
	render() {
	  return	<div>
					<img src="/img/llama.png"/>
					<HappinessBar happiness={this.state.happiness} />
					<p> {this.props.name} : Baah!</p>
					<LlamagotchiMenu uid={this.props.uid}  />
					<LlamaupgradeMenu uid={this.props.uid} />
				</div>
	}
	
					  
}
