import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import AvGames from 'material-ui/svg-icons/av/games'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import PropTypes from 'prop-types'

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
  }
  render () {
    return <AppBar
      title={<span >{this.props.title}</span>}
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
