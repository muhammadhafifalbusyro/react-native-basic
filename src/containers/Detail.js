import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/header/Header';

export default class Detail extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Detail</Text>
      </View>
    );
  }
}
