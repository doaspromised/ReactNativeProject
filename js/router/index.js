import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIconWithBadge from './homeicon.badge';
import Home from '../screens/home';
import Detail from '../screens/home/details';
import Mine from '../screens/mine';

const styles = StyleSheet.create({
  backImage: {
    marginLeft: 8,
    width: 25,
    height: 25,
  },
});
const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Mine,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Mine') {
          iconName = 'ios-options';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }),
  },
);

const stackNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: Detail,
    },
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
          source={require('../assets/common_back.png')}
        />
      ),
    },
  },
);

export default createAppContainer(stackNavigator);
