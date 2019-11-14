/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from './js/screens/main/stack';
import Router from './js/router';
const App: () => React$Node = () => {
  return (
    <AppNavigator
      ref={navigatorRef => {
        Router.setTopLevelNavigator(navigatorRef); //设置顶层导航
      }}
    />
  );
};

export default App;
