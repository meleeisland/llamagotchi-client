import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Llama from './components/Llama'
import RegisterForm from './components/RegisterForm'
import TopBar from './components/TopBar'

if (document.getElementById('topbar') !== null) ReactDOM.render(<MuiThemeProvider><TopBar title='LlamaGotchi' /></MuiThemeProvider>, document.getElementById('topbar'))

if (document.getElementById('content') !== null) { ReactDOM.render(<MuiThemeProvider><Llama /></MuiThemeProvider>, document.getElementById('content')) }
if (document.getElementById('register') !== null) { ReactDOM.render(<MuiThemeProvider><RegisterForm /></MuiThemeProvider>, document.getElementById('register')) }
