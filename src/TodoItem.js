import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Toast from "react-native-simple-toast";
import { TodoContext } from "./TodoContainer";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <View style={styles.todoContentContainer}>
      <View style={styles.horizontalCenter}>
        <Icon.Button
          name={todo.status === "todo" ? "circle" : "check-circle"}
          backgroundColor="transparent"
          size={20}
          color="black"
          style={styles.iconMargin}
          onPress={() => {
            dispatch({ type: "CHANGE_TODO_STATUS", payload: todo.id - 1 });
          }}
        />
        <Text
          style={[
            styles.todoContentText,
            todo.status === "done" ? styles.textLineThrough : null
          ]}
        >
          {todo.title}
        </Text>
      </View>
      <View style={styles.horizontalCenter}>
        <Icon.Button
          name="edit"
          backgroundColor="transparent"
          size={20}
          color="black"
          onPress={() => Toast.show("MODIFY")}
        />
        <Icon.Button
          name="trash-2"
          backgroundColor="transparent"
          size={20}
          color="black"
          onPress={() => Toast.show("DELETE")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContentContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  horizontalCenter: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconMargin: {
    marginLeft: 10
  },
  todoContentText: {
    color: "black",
    marginLeft: 10
  },
  textLineThrough: {
    textDecorationLine: "line-through"
  }
});

export default TodoItem;
