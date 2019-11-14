/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';
import BaseComponent from '../../../common/component.base';
import Router from '../../../router';

@withMappedNavigationParams()
export default class index extends BaseComponent {
  static navigationOptions = ({navigation, name = 'Lily'}) => ({
    title: `${name}'s Profile!`,
    // headerTransparent: true,
  });

  render() {
    const {itemId, otherParam} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text>详情</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>
          otherParam:
          {JSON.stringify(otherParam)}
        </Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({
              otherParam: 'Updated!',
              name: 'Josh',
            })
          }
        />
        <Button
          title="back to mine"
          onPress={() =>
            Router.navigate('Mine', {
              data: '这是我给你的数据',
            })
          }
        />
        <Button
          title="replace testScreen"
          onPress={() => Router.replace('Test', {data: '这是我给你的数据'})}
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
