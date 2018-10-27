import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    // return <ExpoConfigView />;
      return (
          <ScrollView style={styles.container}>

          </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
