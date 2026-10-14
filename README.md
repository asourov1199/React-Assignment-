# Student Task Manager

A small React app for keeping track of study tasks. Add something you need to do, check it off when it is finished, or delete it if you no longer need it.

The app starts with an empty list. Tasks are saved in your browser, so they are still there when you refresh the page. There is no backend or account setup.

## Run locally

Install a supported Node.js version first: Node 20.19+ or Node 22.12+. A current Node LTS release is recommended.

Extract the ZIP, open the `student-task-manager` folder in VS Code, and run these commands in its terminal:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

To check the production build:

```bash
npm run build
npm run preview
```

The preview URL is usually `http://localhost:4173`. Press `Ctrl+C` to stop either server. Do not open `index.html` by double-clicking it; use the development or preview server.

## Features

- Add a task using the form or the Enter key.
- Reject empty titles and titles containing only spaces.
- Mark a task as completed, or switch it back to pending.
- Confirm before deleting a task.
- Filter the list by All, Pending, or Completed.
- See total, completed, and remaining task counts.
- See a completion progress bar.
- Show "No tasks available" when the whole list is empty, with separate messages for empty filters.
- Save tasks in localStorage and show a helpful message if saving or loading fails.
- Show a friendly fallback if rendering the task list fails.
- Use the app on a phone or desktop, with keyboard controls and labelled inputs.

All seven required features and all five optional features from the assignment are included. The full mapping is in [docs/ASSIGNMENT_CHECKLIST.md](docs/ASSIGNMENT_CHECKLIST.md).

## How the React parts work

`App.jsx` owns the task array and selected filter. It passes data and event handlers to the smaller components through props.

- `TaskForm` uses a controlled input and validates the title before adding it.
- `TaskItem` receives one task and calls the toggle and delete handlers.
- `TaskList` uses `map()` to render items and conditional rendering for empty states.
- `TaskFilters` changes which tasks are shown without changing the original list.
- `TaskStats` receives counts calculated from the complete task array.
- `Card` uses the `children` prop so the same card layout can wrap different content.
- `ErrorBoundary` catches rendering errors in the task list and offers a retry button.
- `taskStorage.js` reads and validates saved tasks. `useEffect` saves changes.

Tasks have an `id`, `title`, and `completed` value. State updates use new arrays through `map()` and `filter()` rather than changing the existing array. New tasks appear at the top of the list. Adding a task switches to All so it is immediately visible.

## Project structure

```text
student-task-manager/
  public/
    favicon.svg
  src/
    components/
      Card.jsx
      ErrorBoundary.jsx
      Icon.jsx
      TaskFilters.jsx
      TaskForm.jsx
      TaskItem.jsx
      TaskList.jsx
      TaskStats.jsx
    utils/
      taskStorage.js
    App.jsx
    main.jsx
    styles.css
  docs/
    ASSIGNMENT_CHECKLIST.md
    SUBMISSION_GUIDE.md
    TESTING.md
  .gitignore
  index.html
  package.json
  package-lock.json
  vite.config.js
  README.md
```

## Submit

The assignment asks for a **GitHub repository URL**. Upload the extracted source folder, not the ZIP file. See [docs/SUBMISSION_GUIDE.md](docs/SUBMISSION_GUIDE.md) for the steps. The ZIP is a project download, not a submitted repository.

## Notes

Tasks belong to this browser and site address. They do not sync between devices, and clearing browser storage removes them. Duplicate titles are allowed because each task has its own ID. If saved data is damaged, it is left untouched until you choose **Save this list**.

No CSS framework or external image/font service is needed. The only application dependencies are React and React DOM; Vite is used for development and building.

## References

- [React: updating arrays in state](https://react.dev/learn/updating-arrays-in-state)
- [React: error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Vite: getting started](https://vite.dev/guide/)
