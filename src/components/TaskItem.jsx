import Icon from './Icon';

export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'is-completed' : ''}`}>
      <label className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span className="sr-only">
          Mark {task.title} as {task.completed ? 'pending' : 'completed'}
        </span>
      </label>
      <div className="task-content">
        <p className="task-title">{task.title}</p>
        <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
          <span className="status-dot" />
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteTask(task)}
        aria-label={`Delete ${task.title}`}
        title="Delete task"
      >
        <Icon name="trash" size={18} />
      </button>
    </li>
  );
}
