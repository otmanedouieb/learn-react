export default function Task({ task, onDeleteHandel }) {
  return (
    <li
      key={task.id}
      className={task.completed ? "completed" : "not-completed"}
    >
      <span>{task.id}</span> - <span>{task.name}</span>
      <span>
        <button onClick={() => onDeleteHandel(task.id)} className="btn-delete">
          delete
        </button>
      </span>
    </li>
  );
}
