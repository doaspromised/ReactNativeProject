/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';
import BaseComponent from '../../common/component.base';
import Router from '../../router';
@withMappedNavigationParams()
export default class index extends BaseComponent {
  static navigationOptions = {
    header: ({navigation}) => {
      let {
        state: {routes},
      } = navigation;
      Router.setRouters(routes, navigation);
      return null;
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentWillFocus() {
    const data = this.props.data;
    data && this.setState({data});
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.navigation.state.params?.data || '我的'}</Text>
        <Text>{this.state.data}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
