import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Llama from './components/Llama'
ReactDOM.render(<MuiThemeProvider><Llama /></MuiThemeProvider>, document.getElementById('content'))
