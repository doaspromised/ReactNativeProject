/**
 * test.js
 *
 * Created by 姜守栋 on 2019/11/14.
 * @format
 */

import React, {PureComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';

@withMappedNavigationParams()
export default class index extends PureComponent {
  static navigationOptions = {
    title: '测试',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>测试</Text>
        <Text>{this.props.data || '暂无数据'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
});
