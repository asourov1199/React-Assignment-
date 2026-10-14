# Assignment checklist

Project: **Student Task Manager**

## Required features

| Requirement | Where it is implemented |
| --- | --- |
| Display tasks with titles and status | `TaskList.jsx` renders `TaskItem.jsx`; each item shows Pending or Completed. |
| Add a task with an input and Add Task button | `TaskForm.jsx` sends the trimmed title to `App.jsx`. |
| Complete a task with a checkbox or button | Each `TaskItem.jsx` has a controlled checkbox. |
| Delete tasks | `App.jsx` removes the selected task using its unique ID. |
| Show "No tasks available" when empty | `TaskList.jsx` conditionally renders the empty state. |
| Display total and completed tasks | `TaskStats.jsx` receives counts from `App.jsx`. |
| Prevent empty submissions | `TaskForm.jsx` checks `title.trim()` and displays an inline error. |

## Optional features

| Requirement | Where it is implemented |
| --- | --- |
| All, Completed, and Pending filters | `TaskFilters.jsx` selects the filter; `App.jsx` calculates the visible list. |
| Confirmation before deletion | `App.jsx` uses `window.confirm()` before removing a task. |
| Friendly fallback if tasks cannot be displayed | `ErrorBoundary.jsx` wraps `TaskList` and renders a retry message. |
| Reusable Card using children | `Card.jsx` wraps the form, progress, statistics, and task list. |
| Remaining-task counter | `TaskStats.jsx` shows the total minus completed tasks. |

## React topics used

| Topic | Example |
| --- | --- |
| Components and JSX | The app is composed of focused components returning JSX. |
| Props | Tasks, counts, and event handlers are passed from `App` to child components. |
| Events | Form submission, input changes, checkbox changes, and button clicks. |
| Conditional rendering | Empty list, empty filters, form errors, and completed status. |
| Component composition | Reusable `Card` and `ErrorBoundary` receive content as children. |
| Error handling | Inline validation, storage try/catch, and a React error boundary. |
| State | `useState` holds tasks, filters, form input, and feedback. |
| Effects | `useEffect` saves tasks when the list changes. |

The repository URL must be supplied after uploading the project to your own GitHub account. No repository URL is invented or included as a completed submission.
