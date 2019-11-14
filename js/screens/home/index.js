/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';
import Router from '../../router';
import BaseComponent from '../../common/component.base';
@withMappedNavigationParams()
export default class index extends BaseComponent {
  jumpDetail = () => {
    Router.navigate('Detail', {
      itemId: 99,
      otherParam: 'anything you want here111',
      name: 'Nick',
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>index</Text>
        <Button title="跳转" onPress={this.jumpDetail} />
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
