/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import AppNavigator from './js/screens/main/switch';
import AppStack from './js/screens/main/stack';
import Router from './js/router';

const MyApp = createAppContainer(AppStack);
const App: () => React$Node = () => (
  <MyApp
    ref={navigatorRef => {
      Router.setTopLevelNavigator(navigatorRef); // 设置顶层导航
    }}
    onNavigationStateChange={(prevNavState, nextNavState, action) => {
      if (action.type !== 'Navigation/COMPLETE_TRANSITION') {
        Router.setRouters(nextNavState?.routes);
      }
    }}
  />
);

export default App;
