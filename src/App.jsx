// import React, { NavLink, Outlet, Route, Routes, Navigate } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";

import { CharacterCounter } from "./routes/charactercounter/CharacterCounter";
import { TodoList } from "./routes/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="header">
          <img width="80px;" src="./todocounter.png" alt="logo" />
          <h2>Todo List and Character Counter</h2>
        </div>
        <RecoilRoot>
          <CharacterCounter />
          <TodoList />
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
