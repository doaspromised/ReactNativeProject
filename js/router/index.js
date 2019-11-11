import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Mine from '../screens/mine';
const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Mine: {
    screen: Mine,
  },
});
export default createAppContainer(stackNavigator);
