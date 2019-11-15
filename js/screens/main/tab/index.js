import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeIconWithBadge from './homeicon.badge';
import Home from '../../home';
import Mine from '../../mine';

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
        let IconComponent = FontAwesome;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Mine') {
          iconName = 'user';
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

export default TabNavigator;
