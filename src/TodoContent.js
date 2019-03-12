import React from "react";
import { StyleSheet } from "react-native";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContainer";

const TodoContent = () => {
  return (
    <TodoContext.Consumer>
      {({ todos }) => {
        return todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
      }}
    </TodoContext.Consumer>
  );
};

const styles = StyleSheet.create({});

export default TodoContent;
