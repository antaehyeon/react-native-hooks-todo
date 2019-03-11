import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TodoContent = () => {
  return (
    <View style={styles.todoContentContainer}>
      <Text style={styles.todoContentText}>Learning React Native Hooks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContentContainer: {
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },
  todoContentText: {
    color: "white"
  }
});

export default TodoContent;
