/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
} from 'react-native';
import BaseComponent from '../../common/component.base';
import Router from '../../router';

export default class Detail extends BaseComponent {
  static navigationOptions = ({ name = 'Lily' }) => ({
    title: `${name}'s Profile!`,
    // headerTransparent: true,
  });

  render() {
    const { itemId, otherParam } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text>登录</Text>
        <Text>
          itemId:
          {JSON.stringify(itemId)}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(otherParam)}
        </Text>
        <Button
          title="登录二级操作"
          onPress={() => Router.push('Identity')}
        />
        <Button
          title="back to mine"
          onPress={() => Router.push('Mine', {
            data: '这是我给你的数据',
          })}
        />
        <Button
          title="replace testScreen"
          onPress={() => Router.replace('Test', { data: '这是我给你的数据' })}
        />
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
