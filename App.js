import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TodoStore from "./store/TodoStore";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoStore />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ff7f50"
  }
});
