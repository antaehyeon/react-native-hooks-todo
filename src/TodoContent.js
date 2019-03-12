import React from "react";
import { StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoContent = ({ todos }) => {
  console.log(todos);

  return (
    <>
      {todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({});

export default TodoContent;
