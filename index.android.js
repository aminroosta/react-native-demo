import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './src/home.ui';
import Assets from './src/assets.ui';


const App = StackNavigator({
  Home: { screen: Home, },
  Assets: { screen: Assets },
});

AppRegistry.registerComponent('demo', () => App);
