import React, { Component } from 'react';
import {StyleSheet, View, Button} from 'react-native';

class Drawer extends Component {

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});

export default Drawer;

