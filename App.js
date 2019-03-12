import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TodoHeader from "./src/TodoHeader";
import TodoContainer from "./src/TodoContainer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoHeader />
        <TodoContainer />
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
