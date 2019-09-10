import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/header/Header';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text onPress={() => this.props.navigation.navigate('Detail')}>
          {' '}
          Home{' '}
        </Text>
      </View>
    );
  }
}
