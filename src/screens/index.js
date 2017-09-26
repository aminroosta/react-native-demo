import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import Home from './Home';
import Drawer from './Drawer';
import TradeTab from './TradeTab';
import PortfolioTab from './PortfolioTab';

export function registerScreens() {
  Navigation.registerComponent('Drawer', () => Drawer);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Home.PortfolioTab', () => PortfolioTab);
  Navigation.registerComponent('Home.TradeTab', () => TradeTab);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}

