import React from 'react'

export default class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle (e) {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  render () {
    if (this.state.menuOpen) {
      let actions = this.props.actions.map(
(item) => <li key={this.props.uid + '-' + item.name} onClick={item.onClick}>{item.name}</li>
)
      return <div><span onClick={this.toggle}>{this.props.title}</span>
        <ul>
          {actions}
        </ul>
      </div>
    } else {
      return <div onClick={this.toggle}>{this.props.title}</div>
    }
  }
}
