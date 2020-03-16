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
        <Text>身份认证</Text>
        <Text>
          itemId:
          {JSON.stringify(itemId)}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(otherParam)}
        </Text>
        <Button
          title="登录二级操作完成"
          onPress={() =>{
            Router.popToN(2);
            Router.push('Detail', {
              itemId,
              otherParam: '登录成功',
              name: 'Nick',
            });
          }}
        />
        <Button
          title="登录二级操作完成 reset"
          onPress={() => {
            // let routeNames = ['Main', 'Detail'];
            // Router.reset(routeNames.length - 1, routeNames)
            // Router.popToRouter('Main');
          }}
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
