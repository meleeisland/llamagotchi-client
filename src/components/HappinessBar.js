import React from 'react'

export default class HappinessBar extends React.Component {
  render () {
    return <div style={{'width': '250px', 'float': 'left', 'height': '20px', 'border': '1px solid', 'borderRadius': '5px'}} ><div style={{'width': this.props.happiness + '%', 'background': 'green', 'float': 'left', 'height': '100%'}} /></div>
  }
}
