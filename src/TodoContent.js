import React from "react";
import { StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoContent = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({});

export default TodoContent;
