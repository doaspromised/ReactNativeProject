/**
 * index.js
 *
 * Created by 姜守栋 on 2019/11/11.
 * @format
 */

import React, {PureComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';

@withMappedNavigationParams()
export default class index extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {itemId, otherParam} = this.props;
    return (
      <View style={styles.container}>
        <Text>index</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>
          otherParam:
          {JSON.stringify(otherParam)}
        </Text>
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
