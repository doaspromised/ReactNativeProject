import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Router from '../../router';

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync()
  }
  _bootstrapAsync = async () => {
    // eslint-disable-next-line no-undef
    storage
      .load({
        key: 'userToken',
      })
      .then(userToken => {
        Router.navigate(userToken ? 'Main' : 'Auth');
      })
      .catch(error => {
        Router.navigate('Main');
      });
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
