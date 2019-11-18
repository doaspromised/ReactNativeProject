import React from 'react';
import { Button, View } from 'react-native';
import Router from '../../router';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  signInAsync = async () => {
    storage
      .save({
        key: 'userToken',
        data: 'abc',
      })
      .then(() => {
        const { authPage, authPageParam } = global;
        Router.navigate(authPage || 'Main', authPageParam);
        global.authPage = null;
        global.authPageParam = null;
      })
      .catch(() => {
        console.log('保存token失败');
      });
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this.signInAsync} />
      </View>
    );
  }
}
export default SignInScreen;
