import React from 'react';
import {Button, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';
import Router from '../../router';

@withMappedNavigationParams()
export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };
  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    // eslint-disable-next-line no-undef
    storage
      .save({
        key: 'userToken',
        data: 'abc',
      })
      .then(() => {
        const {authPage, authPageParam} = global;
        Router.navigate(authPage || 'Main', authPageParam);
        global.authPage = null;
        global.authPageParam = null;
      })
      .catch(error => {
        console.log('保存token失败');
      });
  };
}
