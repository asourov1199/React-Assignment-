# Upload and submit the project

The assignment submission is a GitHub repository link. The project is ready to upload, but you still need to create the repository in your own account.

## Option 1: Upload through GitHub

1. Extract the ZIP and open the `student-task-manager` folder.
2. Sign in to [GitHub](https://github.com) and create a new repository named `student-task-manager`.
3. Choose Public if your teacher needs to open it without an invitation. Leave the initial README, license, and gitignore options unchecked because the project already contains its own README and gitignore.
4. Open **uploading an existing file** on the empty repository page, or use **Add file > Upload files**.
5. Drag the contents of the extracted project folder into the upload area. Include `src`, `public`, `docs`, `README.md`, `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, and `.gitignore`.
6. Do not upload `node_modules`, `dist`, or the ZIP. If those folders were created while running the app, keep them out of the upload.
7. Use a commit message such as `Add student task manager` and select **Commit changes**.
8. Open the repository's **Code** tab and copy its URL from the browser address bar. That is the link to submit.

Before sending it, check that `package.json` and `README.md` are directly at the repository root, and that the source files appear inside `src`.

## Option 2: Use Git from the terminal

Create an empty repository first. Then open a terminal inside the extracted `student-task-manager` folder and run:

```bash
git init
git add .
git commit -m "Add student task manager"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/student-task-manager.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username. If Git asks for your name and email, set your own details before running the commit command again. GitHub may ask you to authenticate when pushing.

Submit the repository's main URL, not an individual file URL, a compare page, or a pull request URL.
