import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Mine from '../screens/mine';
const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Mine: {
      screen: Mine,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        // backgroundColor: '#f4511e',
        borderBottomWidth: 0, // 去掉导航底部黑线
      },
      headerTintColor: '#f45129',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
      },
      headerBackTitle: null,
      headerBackImage: (
        <Image
          style={{marginLeft: 8, width: 25, height: 25}}
          source={require('../assets/common_back.png')}
        />
      ),
    },
  },
);
export default createAppContainer(stackNavigator);
