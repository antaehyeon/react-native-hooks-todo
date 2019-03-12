import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import TodoContent from "./TodoContent";
import useFetch from "../customHooks/useFetch";
import TodoInput from "./TodoInput";
import _ from "lodash";

export const TodoContext = React.createContext();

const todoReducer = (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO": {
      const newTodo = {
        id: Math.floor(Math.random() * 100000000 + 1),
        title: payload,
        status: "todo"
      };
      return [...todos, newTodo];
    }

    case "SET_INIT_DATA":
      return payload;

    case "CHANGE_TODO_STATUS": {
      console.log("[CHANGE_TODO_STATUS] payload", payload);
      const newTodos = _.cloneDeep(todos);
      const targetIdx = _.findIndex(todos, o => {
        return o.id === payload;
      });
      const todoStatus = newTodos[targetIdx].status;
      newTodos[targetIdx].status = todoStatus === "todo" ? "done" : "todo";
      return newTodos;
    }

    case "DELETE_TODO_ITEM": {
      console.log("[DELETE_TODO_ITEM] before todos, payload", todos, payload);
      const newTodos = _.cloneDeep(todos);
      const targetIdx = _.findIndex(todos, o => {
        return o.id === payload;
      });
      _.pullAt(newTodos, [targetIdx]);
      console.log("[DELETE_TODO_ITEM] after todos, newTodos", todos, newTodos);
      return newTodos;
    }

    default:
      break;
  }
};

const TodoContainer = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(todoReducer, []);

  useFetch(dispatch, "http://192.168.1.219:8080/todo");

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
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
