import { useEffect, useState } from 'react';
import Card from './components/Card';
import ErrorBoundary from './components/ErrorBoundary';
import Icon from './components/Icon';
import TaskFilters from './components/TaskFilters';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import { readTasks, saveTasks } from './utils/taskStorage';

export default function App() {
  const [savedData] = useState(readTasks);
  const [tasks, setTasks] = useState(savedData.tasks);
  const [filter, setFilter] = useState('all');
  const [storageWarning, setStorageWarning] = useState(savedData.warning);
  const [canSave, setCanSave] = useState(!savedData.warning);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (!canSave) return;

    try {
      saveTasks(tasks);
    } catch {
      setCanSave(false);
      setStorageWarning('Your browser could not save this list. Your tasks still work, but changes may be lost after a refresh.');
    }
  }, [tasks, canSave]);

  const completed = tasks.filter((task) => task.completed).length;
  const remaining = tasks.length - completed;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  function addTask(title) {
    const task = { id: crypto.randomUUID(), title, completed: false };
    setTasks((currentTasks) => [task, ...currentTasks]);
    setFilter('all');
    setAnnouncement(`Added task: ${title}`);
  }

  function toggleTask(id) {
    const task = tasks.find((item) => item.id === id);
    setTasks((currentTasks) => currentTasks.map((item) => (
      item.id === id ? { ...item, completed: !item.completed } : item
    )));
    setAnnouncement(`Marked ${task.title} as ${task.completed ? 'pending' : 'completed'}.`);
  }

  function deleteTask(task) {
    if (!window.confirm(`Delete "${task.title}"? This cannot be undone.`)) return;
    setTasks((currentTasks) => currentTasks.filter((item) => item.id !== task.id));
    setAnnouncement(`Deleted task: ${task.title}`);
  }

  const date = new Intl.DateTimeFormat('en', {
    weekday: 'short', month: 'short', day: 'numeric',
  }).format(new Date());

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to tasks</a>
      <header className="site-header">
        <div className="brand">
          <span className="brand-icon"><Icon name="list" size={24} /></span>
          <div>
            <p className="brand-name">Study Desk<span className="brand-dot">.</span></p>
            <p className="brand-caption">A little structure. A lot of progress.</p>
          </div>
        </div>
        <div className="date-label"><Icon name="calendar" size={17} /><span>{date}</span></div>
      </header>

      <main id="main-content">
        <section className="page-heading" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">YOUR STUDY DAY, ORGANIZED</p>
            <h1 id="page-title">Student Task Manager<span className="heading-dot">.</span></h1>
            <p className="page-description">Less in your head. More checked off your list.</p>
          </div>
          <span className="workspace-label"><span /> Your personal workspace</span>
        </section>

        {storageWarning && (
          <div className="storage-warning" role="alert">
            <p>{storageWarning}</p>
            <button
              type="button"
              onClick={() => {
                setStorageWarning('');
                setCanSave(true);
              }}
            >
              Save this list
            </button>
          </div>
        )}

        <TaskStats total={tasks.length} completed={completed} remaining={remaining} />

        <div className="workspace-grid">
          <aside className="workspace-sidebar" aria-label="Add a task and view progress">
            <Card className="form-card">
              <div className="section-marker"><Icon name="plus" size={18} /></div>
              <h2>What's next?</h2>
              <p className="section-description">Turn that next thing into a task.</p>
              <TaskForm onAddTask={addTask} />
            </Card>

            <Card className="progress-card">
              <div className="progress-heading"><h2>Your progress</h2><span>{progress}%</span></div>
              <div
                className="progress-track"
                role="progressbar"
                aria-label="Completed tasks"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuetext={`${completed} of ${tasks.length} tasks completed`}
              >
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <p>{tasks.length === 0
                ? 'A fresh start. Your first task is a great place to begin.'
                : remaining === 0
                  ? 'Everything is done. Nice work! Take a well-earned break.'
                  : `${remaining} ${remaining === 1 ? 'task' : 'tasks'} to go. Keep moving at your own pace.`}
              </p>
            </Card>

            <div className="study-note">
              <Icon name="book" size={21} />
              <div><p>A little reminder</p><span>You do not need to do it all at once. Just do the next thing.</span></div>
            </div>
          </aside>

          <section className="tasks-section" aria-labelledby="tasks-heading">
            <Card className="tasks-card">
              <div className="tasks-heading">
                <div><p className="eyebrow">ONE TASK AT A TIME</p><h2 id="tasks-heading">Your tasks</h2></div>
                <span className="list-count">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
              </div>
              <TaskFilters
                activeFilter={filter}
                onFilterChange={setFilter}
                counts={{ all: tasks.length, completed, pending: remaining }}
              />
              <ErrorBoundary>
                <TaskList
                  tasks={visibleTasks}
                  filter={filter}
                  hasTasks={tasks.length > 0}
                  onToggleTask={toggleTask}
                  onDeleteTask={deleteTask}
                />
              </ErrorBoundary>
              <div className="list-footer"><Icon name="check" size={15} /><span>Check a task to mark it as completed.</span></div>
            </Card>
          </section>
        </div>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
      </main>

      <footer className="site-footer">
        <span>Made for a calmer study day.</span>
        <span>One task at a time.</span>
      </footer>
    </div>
  );
}
