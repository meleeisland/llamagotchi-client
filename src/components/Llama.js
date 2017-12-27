import React from 'react';
import axios from 'axios';
import LoggedLlama from './LoggedLlama';

export default class Llama extends React.Component {
	 constructor(props) { 
		 super(props); 
		 this.state = {logged: false , name : ""};
		 this.login = this.login.bind(this);
	 }
	 
	login(e){
		e.preventDefault();
		let u = (e.target.querySelector('input[name="username"]'));
		let p = (e.target.querySelector('input[name="password"]'));
		console.log("login " + u.value + " " + p.value);
		axios.post("http://localhost:8080/login/",{
			type: "login",
			username: u.value,
			password: p.value
		}).then(
			(response) =>  {
				if (response.error) console.log(false);
				console.log(response.data)
				let type = response.data.type
				if (type == "new") {
					console.log("new game");
					type = "load"
				}
				if (type == "load") {
					console.log("logged");
					this.setState({ logged : response.data.uid , name : response.data.data})
				}
			}) ;
	}
  render() {
    
	  if (this.state.logged == false) {
		  return (
		<form onSubmit={this.login}>
			<input type="text" name="username" />
			<input type="password" name="password" />
			<input type="submit" />
		</form>
		)
	  } else {
		  return <LoggedLlama name={this.state.name}  uid={this.state.logged} />
	  }
  }
}
