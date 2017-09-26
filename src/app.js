import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';

registerScreens();
// registerScreenVisibilityListener();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
    title: 'Home', // (optional)
    topTabs: [
      {
        screenId: 'Home.PortfolioTab',
        title: 'Portfolio',
      },
      {
        screenId: 'Home.TradeTab',
        title: 'Trade',
      }
    ],
  },
  drawer: {
    left: {
      screen: 'Drawer'
    }
  }
});
