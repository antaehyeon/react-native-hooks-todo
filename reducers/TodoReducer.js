import _ from "lodash";

const TodoReducer = (todos, { type, payload }) => {
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

export default TodoReducer;
