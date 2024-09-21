import { useState } from "react";

import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Notice from "./components/Notice";

import "./App.css";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <TaskList />
      <Notice>Hello</Notice>
    </div>
  );
}

export default App;
