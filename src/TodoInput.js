import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TodoContext } from "./TodoContainer";

const TodoInput = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <View style={styles.todoInputText}>
      <TextInput
        style={{ padding: 0, margin: 0, paddingLeft: 8 }}
        placeholder="할일을 입력해주세요"
        placeholderTextColor="grey"
        onChangeText={text => {
          setCurrentTodo(text);
        }}
      />
      <Icon.Button
        name="add-box"
        size={30}
        color="black"
        backgroundColor="transparent"
        onPress={() => {
          const newTodo = {
            id: todos.length + 1,
            title: currentTodo,
            status: "todo"
          };
          setTodos([...todos, newTodo]);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoInputText: {
    height: 30,
    borderWidth: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default TodoInput;
