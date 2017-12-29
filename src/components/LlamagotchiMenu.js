import React from 'react';
import CareMenuItem from './CareMenuItem'


export default class LlamagotchiMenu extends React.Component {
	 constructor(props) { 
		 super(props); 
	 }
	
	render() {
		return	<div>
					<CareMenuItem uid={this.props.uid}/>
				</div>
	}
	
					  
}
