import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import AvGames from 'material-ui/svg-icons/av/games'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import PropTypes from 'prop-types'
import {LlamaStore} from '../modules/LlamaStore'

function goHome () {
  console.log('home')
  window.location.replace('/')
}
function goRegister () {
  console.log('register')
  window.location.replace('/register')
}

export default class TopBar extends React.Component {
  constructor (props) {
    super()
    this.state = this.getStateFromStore()
    this.onChange = this.onChange.bind(this)
    LlamaStore.setPageTitle(props.title)
  }
  getStateFromStore () {
    return LlamaStore.getState()
  }
  onChange () {
    this.setState(this.getStateFromStore())
  }
  componentDidMount () {
    LlamaStore.onChange = this.onChange
  }
  render () {
    return <AppBar
      title={<span >{this.state.pageTitle}</span>}
      onRightIconButtonClick={this.handleClick}
      iconElementLeft={<IconMenu
        iconButtonElement={<IconButton><AvGames /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText='Home' onClick={goHome} />
        <MenuItem primaryText='Register' onClick={goRegister} />
      </IconMenu>}
    />
  }
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired
}
