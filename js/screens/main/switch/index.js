import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { Transition } from 'react-native-reanimated';
import AppStack from '../stack';
import AuthLoadingScreen from '../../auth';
import SignInScreen from '../../auth/signin';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAnimatedSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out type="fade" durationMs={400} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);
