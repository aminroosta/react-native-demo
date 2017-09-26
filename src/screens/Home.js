import React, {Component} from 'react';
import {PixelRatio} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styled from 'styled-components/native';

class Home extends Component {
  static navigatorStyle = {
    statusBarColor: 'rgba(0,0,0,.1)',
    navBarHeight: 56,
    navBarCustomView: 'TopBar',
    navBarBackgroundColor: 'white',
    navBarComponentAlignment: 'fill',

    topTabsHeight: 30,
    topTabTextColor: 'rgba(0,0,0, .2)',
    selectedTopTabTextColor: 'black',

    // topTabIconColor: '#ffffff',
    // selectedTopTabIconColor: '#ff505c',

    // Tab indicator
    selectedTopTabIndicatorHeight: PixelRatio.get() * 3 | 0,
    selectedTopTabIndicatorColor: 'black',

  };
  static navigatorButtons = {
    leftButtons: [ {
      id: 'sideMenu'
    }],
    rightButtons: [ ],
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

const View = styled.View`
  flex: 1;
  background-color: powderblue;
`;
const Text = styled.Text``;

export default Home;

