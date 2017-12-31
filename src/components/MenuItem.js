import React from 'react'
import Divider from 'material-ui/Divider'
import {ListItem} from 'material-ui/List'

export default class MenuItem extends React.Component {
  render () {
    let items = (this.props.actions).map((item, i) => {
      if (item.name === 'divider') return <Divider key={'div-' + i} />
      if (item.icon !== undefined) return <ListItem onClick={item.onClick} key={'el-ico-' + i} primaryText={item.name} />
      return <ListItem onClick={item.onClick} key={'el-' + i} primaryText={item.name} />
    })
    return <ListItem primaryText={this.props.primaryText} nestedItems={items} />
  }
}
