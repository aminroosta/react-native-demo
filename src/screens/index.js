import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import {Stores, MobxProvider} from '../stores';

import Home from './Home';
import Drawer from './Drawer';
import TradeTab from './TradeTab';
import PortfolioTab from './PortfolioTab';
import TopBar from './TopBar';

export function registerScreens() {
  Navigation.registerComponent('Drawer', () => Drawer, Stores, MobxProvider);
  Navigation.registerComponent('Home', () => Home, Stores, MobxProvider);
  Navigation.registerComponent('Home.PortfolioTab', () => PortfolioTab, Stores, MobxProvider);
  Navigation.registerComponent('Home.TradeTab', () => TradeTab, Stores, MobxProvider);
  Navigation.registerComponent('TopBar', () => TopBar, Stores, MobxProvider);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}

