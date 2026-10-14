import Icon from './Icon';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, filter, hasTasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    const heading = !hasTasks
      ? 'No tasks available'
      : filter === 'completed' ? 'No completed tasks yet' : 'No pending tasks';
    const description = !hasTasks
      ? 'Add your first task to give your study day a little direction.'
      : filter === 'completed'
        ? 'Finish a task and it will appear here. One small step is a good start.'
        : 'You are all caught up. Take a moment to enjoy your progress.';

    return (
      <div className="empty-state">
        <div className="empty-icon"><Icon name={filter === 'pending' && hasTasks ? 'check' : 'list'} size={28} /></div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <ul className="task-list" aria-label="Task list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
