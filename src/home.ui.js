import React, { Component } from 'react';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import Portfolio from './portfolio.ui';
import Trade from './trade.ui';

const HomeNavigator = TabNavigator({
  Trade: { screen: Trade },
  Portfolio: { screen: Portfolio },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text> Home Screen </Text> 
        <Button title="Assets"
          onPress={() => navigate('Assets')} />
        <HomeNavigator />
      </View>
    );
  }
};

const Text = styled.Text``;
const Button = styled.Button``;
const View = styled.View`
  flex: 1;
  background: skyblue;
`;

export default Home;
