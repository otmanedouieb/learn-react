import { useState } from "react";

import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Notice from "./components/Notice";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <Notice>Hello</Notice>
    </div>
  );
}

export default App;
