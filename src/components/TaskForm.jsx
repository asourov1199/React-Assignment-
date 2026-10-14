import { useRef, useState } from 'react';
import Icon from './Icon';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Please write a task before adding it.');
      inputRef.current.focus();
      return;
    }

    onAddTask(trimmedTitle);
    setTitle('');
    setError('');
    inputRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label className="input-label" htmlFor="task-title">Task title</label>
      <input
        id="task-title"
        name="title"
        type="text"
        ref={inputRef}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          if (error) setError('');
        }}
        placeholder="e.g. Read chapter 3"
        maxLength={160}
        autoComplete="off"
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? 'task-hint task-error' : 'task-hint'}
      />
      <div className="input-meta">
        <span id="task-hint">Keep it small and specific.</span>
        <span aria-hidden="true">{title.length}/160</span>
      </div>
      {error && <p className="form-error" id="task-error" role="alert">{error}</p>}
      <button type="submit" className="button primary-button">
        <Icon name="plus" size={18} />
        Add Task
      </button>
    </form>
  );
}
