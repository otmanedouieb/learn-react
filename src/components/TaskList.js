import { useState } from "react";

import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
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
