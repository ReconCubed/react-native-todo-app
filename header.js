import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <TextInput
        placeholder={"What needs to be done?"}
        blurOnSubmit={false}
        returnKeyType={"done"}
        style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
  }
});