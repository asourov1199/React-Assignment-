export const STORAGE_KEY = 'student-task-manager.tasks';

export function readTasks() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return { tasks: [], warning: '' };

    const tasks = JSON.parse(raw);
    const isValid = Array.isArray(tasks) && tasks.every((task) => (
      task && typeof task.id === 'string' && task.id.length > 0
      && typeof task.title === 'string' && task.title.trim().length > 0
      && task.title.length <= 160 && typeof task.completed === 'boolean'
    ));
    const hasUniqueIds = isValid && new Set(tasks.map((task) => task.id)).size === tasks.length;

    if (!isValid || !hasUniqueIds) throw new Error('Invalid saved tasks');
    return { tasks, warning: '' };
  } catch {
    return {
      tasks: [],
      warning: 'Your saved tasks could not be loaded. You can still use the app. Choose "Save this list" to replace saved data with the current list.',
    };
  }
}

export function saveTasks(tasks) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
