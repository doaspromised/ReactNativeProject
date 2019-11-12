/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
export default class index extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>我的</Text>
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
