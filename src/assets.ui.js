import React, { Component } from 'react';
import styled from 'styled-components/native';

class Assets extends Component {
  static navigationOptions = {
    title: 'Assets',
  };

  render() {
    return (
      <View>
        <Text> Assets Screen </Text> 
      </View>
    );
  }
};

const Text = styled.Text``;
const View = styled.View`
  flex: 1;
  background: powderblue;
`;

export default Assets;
