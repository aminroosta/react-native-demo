import React, { Component } from 'react';
import {StyleSheet, View, Button} from 'react-native';

let Instance = null;

class Drawer extends Component {
  constructor(props) {
    super(props);
    Instance = this;
  }

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
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

export const getDrawerInstance = () => Instance;
export default Drawer;

