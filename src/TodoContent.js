import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/TodoStore";

const TodoContent = () => {
  const { todos } = useContext(TodoContext);

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
