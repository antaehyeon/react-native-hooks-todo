import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import TodoContent from "./TodoContent";
import Icon from "react-native-vector-icons/MaterialIcons";
import useFetch from "../customHooks/useFetch";
import TodoInput from "./TodoInput";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useFetch(setTodos, "http://192.168.1.219:8080/todo");

  return (
    <View style={styles.container}>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoContent todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
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
