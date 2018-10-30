import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class SocialIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={40}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}