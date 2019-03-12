import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TodoContent from "./TodoContent";
import useFetch from "../customHooks/useFetch";
import TodoInput from "./TodoInput";

export const TodoContext = React.createContext();

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useFetch(setTodos, "http://192.168.1.219:8080/todo");

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <View style={styles.container}>
        <TodoInput />
        <TodoContent />
      </View>
    </TodoContext.Provider>
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
