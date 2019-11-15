import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import TabNavigator from '../tab';
import Test from '../../home/details/test';
const MyDrawerNavigator = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
    },
    Notifications: {
      screen: Test,
    },
  },
  {
    drawerBackgroundColor: 'tomato',
    drawerPosition: 'right',
    drawerType: 'slide',
    // overlayColor: 'green',
    contentComponent: null,
  },
);

export default MyDrawerNavigator;
