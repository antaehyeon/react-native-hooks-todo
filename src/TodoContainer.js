import React from "react";
import { StyleSheet, View } from "react-native";
import TodoContent from "./TodoContent";

const TodoContainer = () => {
  return (
    <View style={styels.container}>
      <TodoContent />
    </View>
  );
};

const styels = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    backgroundColor: "white",
    marginTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});

export default TodoContainer;
