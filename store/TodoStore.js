import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import useFetch from "../customHooks/useFetch";
import TodoHeader from "../src/TodoHeader";
import TodoInput from "../src/TodoInput";
import TodoContent from "../src/TodoContent";
import TodoReducer from "../reducers/TodoReducer";
import _ from "lodash";

export const TodoContext = React.createContext();

const TodoStore = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const setInitData = payload => {
    dispatch({ type: "SET_INIT_DATA", payload });
  };

  useFetch(setInitData, "http://192.168.1.219:8080/todo");

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoHeader />
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

export default TodoStore;
