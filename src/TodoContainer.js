import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import TodoContent from "./TodoContent";
import Icon from "react-native-vector-icons/MaterialIcons";

const TodoContainer = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("run useEffect [currentTodo]", currentTodo);
  });

  useEffect(() => {
    console.log("run useEffect [todos]", todos);
  }, [todos]);

  return (
    <View style={styles.container}>
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
  },
  todoInputText: {
    height: 30,
    borderWidth: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default TodoContainer;
