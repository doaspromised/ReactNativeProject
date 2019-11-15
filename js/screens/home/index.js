/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';
import Router from '../../router';
import BaseComponent from '../../common/component.base';

export default class index extends BaseComponent {
  signOutAsync = async () => {
    await storage.remove({
      key: 'userToken',
    });
  };

  jumpDetail = itemId => {
    Router.navigate('Detail', {
      itemId,
      otherParam: 'anything you want here111',
      name: 'Nick',
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="跳转"
          onPress={() => {
            const itemId = 88;
            this.jumpDetail(itemId);
          }}
        />
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
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
