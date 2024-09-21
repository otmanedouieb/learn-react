import { useState } from "react";

import Task from "./Task";

const tasksList = [
  { id: 1, name: "Start learn react", completed: true },
  { id: 2, name: "Complete section one", completed: false },
  { id: 3, name: "Complete section two", completed: false },
  { id: 4, name: "Create simple app with react", completed: false },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(tasksList);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  function handelToggle() {
    setShow((previousShow) => (previousShow = !previousShow));
  }
  return (
    <div className="box">
      <h1>Task List</h1>

      <div>
        <button onClick={handelToggle} className="btn-toggle">
          Toggle
        </button>
      </div>
      {show === true && (
        <ul>
          {tasks.map((task) => (
            <Task task={task} onDeleteHandel={handleDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}
