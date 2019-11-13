/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import BaseComponent from '../../common/component.base';

export default class index extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentWillFocus() {
    const data = this.props.navigation.getParam('data', '');
    data && this.setState({data});
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>我的</Text>
        <Text>{this.state.data}</Text>
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
