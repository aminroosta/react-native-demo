import React, { Component } from 'react';
import styled from 'styled-components/native';

class Portfolio extends Component {
  render() {
    return (
      <View>
        <Text> Portfolio screen</Text> 
      </View>
    );
  }
};

const Text = styled.Text``;
const View = styled.View`
  flex: 1;
  background: white;
`;

export default Portfolio;
