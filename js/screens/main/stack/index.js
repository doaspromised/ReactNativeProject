import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from '../tab';
import Components from '../../index';

const styles = StyleSheet.create({
  backImage: {
    marginLeft: 8,
    width: 25,
    height: 25,
  },
});

const StackNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ...Components,
  },
  {
    initialRouteName: 'TabNavigator',
    defaultNavigationOptions: {
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

export default createAppContainer(StackNavigator);
