/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';

export default class index extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.debug('didBlur', JSON.stringify(payload, 0, 4));
      },
    );
  }

  jumpDetail = () => {
    // this.props.navigation.navigate('Detail', {
    //   itemId: 99,
    //   otherParam: 'anything you want here',
    //   name: 'Nick',
    // });
    this.props.navigation.push('Detail', {
      itemId: 99,
      otherParam: 'anything you want here',
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
