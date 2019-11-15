import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import Router from '../../router';

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = () => {
    storage
      .load({
        key: 'userToken',
      })
      .then(userToken => {
        Router.navigate(userToken ? 'Main' : 'Auth');
      })
      .catch(() => {
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
