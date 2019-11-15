/**
 * test.js
 *
 * Created by 姜守栋 on 2019/11/14.
 * @format
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class index extends PureComponent {
  static navigationOptions = {
    title: '测试',
  };

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Text>测试</Text>
        <Text>{data || '暂无数据'}</Text>
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
