import React, { useState, useContext, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TodoContext } from "./TodoContainer";

const TodoInput = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const todoInputRef = useRef();

  const addTodoData = () => {
    const currentTodoText = todoInputRef.current._lastNativeText;
    const newTodo = {
      id: todos.length + 1,
      title: currentTodoText,
      status: "todo"
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <View style={styles.todoInputText}>
      <TextInput
        /*
            ref 를 사용하기 좋은 조건 3가지
            포커스, 문장선택 혹은 미디어 재생을 관리해야할 경우
            필수 애니메이션을 트리거링 할때
            써드 파티 DOM 라이브러리와 통합할때
        */
        ref={todoInputRef}
        style={{ padding: 0, margin: 0, paddingLeft: 8 }}
        placeholder="할일을 입력해주세요"
        placeholderTextColor="grey"
      />
      <Icon.Button
        name="add-box"
        size={30}
        color="black"
        backgroundColor="transparent"
        onPress={() => addTodoData()}
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
