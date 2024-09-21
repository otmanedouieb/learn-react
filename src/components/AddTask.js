import "./AddTask.css";

export default function AddTask() {
  return (
    <section className="box">
      <h1 className="title">Add Task</h1>
      <form>
        <label htmlFor="task">Task name: </label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="task..."
          autoComplete="off"
        />
        <button>Add</button>
      </form>
    </section>
  );
}
