import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContainer";

const TodoContent = () => {
  const { todos } = useContext(TodoContext);
  console.log("check data", todos);

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
