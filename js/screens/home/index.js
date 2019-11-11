/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class index extends PureComponent {
  static navigationOptions = {
    title: 'Home',
  };
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

  jumpMine = () => {
    this.props.navigation.navigate('Mine', {
      itemId: 99,
      otherParam: 'anything you want here',
      name: 'Nick',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>index</Text>
        <Button title="跳转" onPress={this.jumpMine} />
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
