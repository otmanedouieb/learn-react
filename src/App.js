import { useState } from "react";

import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Notice from "./components/Notice";

import "./App.css";
import AddTask from "./components/AddTask";

const tasksList = [
  { id: 1, name: "Start learn react", completed: true },
  { id: 2, name: "Complete section one", completed: false },
  { id: 3, name: "Complete section two", completed: false },
  { id: 4, name: "Create simple app with react", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(tasksList);

  function handelAddTask(task) {
    setTasks((previousTasks) => [...previousTasks, task]);
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAddTask={handelAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Notice>Hello</Notice>
    </div>
  );
}

export default App;
