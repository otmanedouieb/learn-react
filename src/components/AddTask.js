import { useState } from "react";
import "./AddTask.css";

export default function AddTask({ onAddTask }) {
  const [taskValue, setTasKValue] = useState("0");

  function handelChange(event) {
    setTasKValue(event.target.value);
  }

  function handelReset() {
    setTasKValue("");
  }

  function handelSubmit(e) {
    e.preventDefault();
    const t = {
      id: Date.now(),
      name: taskValue,
      completed: false,
    };

    onAddTask(t);

    handelReset();
  }

  return (
    <section className="box">
      <h1 className="title">Add Task</h1>
      <form onSubmit={(e) => handelSubmit(e)}>
        <label htmlFor="task">Task name: </label>
        <input
          value={taskValue}
          onChange={(event) => handelChange(event)}
          type="text"
          id="task"
          name="task"
          placeholder="task..."
          autoComplete="off"
        />
        <button>Add</button>
        <span onClick={handelReset}>Reset</span>
      </form>
      <p>{taskValue.length}</p>
    </section>
  );
}
