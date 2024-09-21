import { useState } from "react";

import "./App.css";

const tasksList = [
  { id: 1, name: "Start learn react", completed: true },
  { id: 2, name: "Complete section one", completed: false },
  { id: 3, name: "Complete section two", completed: false },
  { id: 4, name: "Create simple app with react", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(tasksList);

  function handleDelete(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <div className="box">
        <h1>Task List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.id}</span> - <span>{task.name}</span>
              <span>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn-delete"
                >
                  delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
