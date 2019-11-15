import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Mine') {
          iconName = 'user';
        }
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
