/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './js/screens/main/switch';
import Router from './js/router';

const MyApp = createAppContainer(AppNavigator);
const App: () => React$Node = () => (
  <MyApp
    ref={navigatorRef => {
      Router.setTopLevelNavigator(navigatorRef); // 设置顶层导航
    }}
  />
);

export default App;
