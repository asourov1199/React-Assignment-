# Checking the app

Run `npm install`, then `npm run dev`. Use the local address printed in the terminal.

| Check | What to do | Expected result |
| --- | --- | --- |
| Empty state | Open the app in a fresh browser profile. | "No tasks available" and zero counts. |
| Empty validation | Submit an empty title or only spaces. | A readable error; no task added. |
| Add a task | Enter `Read chapter 3` and click Add Task. | The title appears as Pending; total and remaining increase. |
| Keyboard submission | Enter another task and press Enter. | A second task appears; input clears and stays focused. |
| Completion | Check a task. | Completed status and a crossed-out title; counts and progress update. |
| Reopen | Uncheck a completed task. | Pending status returns; counts and progress update. |
| Filters | Switch between All, Pending, and Completed. | Only matching tasks appear; overall statistics stay the same. |
| Empty filter | Select Completed before completing a task. | "No completed tasks yet" appears. |
| Cancel deletion | Click Delete and cancel the prompt. | The task and counts remain unchanged. |
| Confirm deletion | Click Delete and accept the prompt. | Only the chosen task is removed. |
| Last deletion | Delete every remaining task. | "No tasks available" returns with zero counts and progress. |
| Reload | Add a task, complete it, and refresh. | The task title and completed status remain. |
| Long and special titles | Add a long title, Bangla text, or text such as `<b>Read</b>`. | Text wraps, stays readable, and is rendered as text rather than HTML. |
| Small screen | Resize to about 375 pixels wide. | Cards stack and the page has no horizontal overflow. |
| Keyboard controls | Use Tab, Enter, and Space to operate the app. | Focus is visible; buttons and checkboxes work. |
| Build | Run `npm run build`, then `npm run preview`. | Build succeeds and the app works at the preview URL. |

## Storage recovery

For an optional error-handling check, open the browser developer console on the app and run:

```js
localStorage.setItem('student-task-manager.tasks', '{invalid json');
location.reload();
```

The app should show a friendly warning and remain usable. The invalid saved value should stay untouched until you choose **Save this list**. This test replaces the tasks saved at that local address, so use a fresh browser profile or a disposable list.

The task-list error boundary is separate from storage handling. It catches rendering errors in its child components and offers **Try again**. It does not claim to catch every event-handler or asynchronous error.

## Verification record

Verified on 13 October 2026 using Node.js 24.19.0, npm 11.9.0, React 19.3.0, and Vite 8.3.4.

- `npm install` completed successfully and produced the included lockfile.
- `npm run build` completed successfully.
- Chromium browser checks passed for empty-state rendering, empty and whitespace validation, button and Enter submission, completion and reopening, all filters, and accurate statistics.
- Delete confirmation was checked with both Cancel and OK, including tasks with duplicate titles and deletion of the last task.
- Saved titles and completion states survived a refresh. Corrupt JSON, invalid stored records, duplicate stored IDs, and storage write failures produced friendly feedback without breaking the app.
- A deliberately failing child component displayed the error-boundary fallback. After the failure was removed, the retry button restored the content.
- Long titles and literal HTML were checked. HTML-like input stayed plain text.
- Keyboard navigation and checkbox activation were checked. Layouts at 320, 375, 768, and 1440 pixels wide had no horizontal overflow.
- The production preview was checked for adding, completing, filtering, reloading, and deleting a task. No uncaught application errors occurred during that flow.
- The final desktop and mobile layouts were visually reviewed.

The deliberate error-boundary fixture and browser tooling were used only for verification and are not part of the submitted source. The table above provides the steps to repeat the functional checks locally.
