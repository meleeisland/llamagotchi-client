import React from 'react';



export default class LlamagotchiMenu extends React.Component {
	 constructor(props) { 
		 super(props); 
		 this.state = {
			 menuOpen : false
		 }
		 this.toggle = this.toggle.bind(this);
	 }
	
	toggle(e){
		this.setState({menuOpen : ! this.state.menuOpen});
	}
	pet(e){
	}
	render() {
		if (this.state.menuOpen) {
			return	<div>
						<div onClick={this.toggle}>CARE </div>
						<ul>
							<li onClick={this.pet}>PET</li>
						</ul>
					</div>
		} else {
			return	<div onClick={this.toggle}>CARE</div>
		}
	}
	
					  
}
