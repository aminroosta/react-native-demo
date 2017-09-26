import React, {Component} from 'react';
import {PixelRatio} from 'react-native';

class Home extends Component {
  static navigatorStyle = {
    topTabTextColor: '#ffffff',
    selectedTopTabTextColor: '#ff505c',

    // Icons
    topTabIconColor: '#ffffff',
    selectedTopTabIconColor: '#ff505c',

    // Tab indicator
    selectedTopTabIndicatorHeight: PixelRatio.get() * 2,
    selectedTopTabIndicatorColor: '#ff505c',
  };
}

export default Home;

