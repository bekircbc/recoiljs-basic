import React from "react";
import { atom, useRecoilValue } from "recoil";

import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";

export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export const TodoList = function () {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
