import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Main from '../tab';
import registeredComponent from '../../index';

const styles = StyleSheet.create({
  backImage: {
    marginLeft: 8,
    width: 25,
    height: 25,
  },
});
const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    ...registeredComponent,
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: true,
      headerStyle: {
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
          style={styles.backImage}
          source={require('../../../assets/common_back.png')}
        />
      ),
    },
  },
);

export default StackNavigator;
