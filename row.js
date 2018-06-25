import React, { Component } from 'react';
import {
  Switch,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};
export default class Row extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.props.complete}
        />
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: '#4d4d4d'
  }
});