'use strict';

import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

export default class displayQR extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <QRCode
          value={this.props.value}
          size={200}
          bgColor='purple'
          fgColor='white'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});