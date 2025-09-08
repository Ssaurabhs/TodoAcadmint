<!-- <p align="center">
<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/public/logo192.png" width="128px" />
</p> -->

# 📝React.js Todo App

<p align="center"><i>A fast and modern Todo app built with React, featuring task sharing via link, P2P Task Sync with WebRTC, theme customization, offline usage as a PWA, and caching for smooth performance.</i></p>

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/baner.png" />

## [https://react-cool-todo-app.netlify.app/](https://react-cool-todo-app.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3b07d34-f0da-4280-9076-fd40eea893c6/deploy-status)](https://app.netlify.com/sites/react-cool-todo-app/deploys)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/maciekt07/TodoApp?color=%23b624ff)
![GitHub created at ](https://img.shields.io/github/created-at/maciekt07/TodoApp?color=%23b624ff)
![GitHub last commit](https://img.shields.io/github/last-commit/maciekt07/TodoApp?color=%23b624ff)

<!-- <p align="center">
<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/iPhone%20Mockup%20black.png" width="400px" />
</p> -->

## 💻 Tech Stack

<ul style="display: flex; flex-direction: column; gap:10px;">
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=react" alt="react" width="24" style="vertical-align: middle; margin-right: 4px;" /> React
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=typescript" alt="typescript" width="20" style="vertical-align: middle;margin-right: 4px;" /> Typescript
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=vite" alt="vite" width="24" style="vertical-align: middle;margin-right: 4px;" /> Vite
  </li>
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=vitest" alt="vitest" width="24" style="vertical-align: middle;margin-right: 4px;" /> Vitest
  </li>
  <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=emotion" alt="emotion" width="24" style="vertical-align: middle;margin-right: 4px;" /> Emotion
  </li>
    <li style="vertical-align: middle;">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=mui" alt="mui" width="24" style="vertical-align: middle;margin-right: 4px;" /> Material UI (MUI)
  </li>
</ul>

## ⚡ Features

- 🔗 **Share Tasks by Link or QR Code** → Easily share your tasks with others using a link or QR code.
- 🎨 **Color Themes & Dark Mode** → Choose from various color themes and toggle between light and dark modes.
- 🗣️ **Task Reading Aloud** → Read tasks aloud using the `SpeechSynthesis` API.
- 📥 **Import/Export Tasks** → Backup and transfer tasks as JSON.
- 📴 **Progressive Web App (PWA)** → Installable, offline support, native-like usage.
- 🔄 **Update Prompt** → Notifies when a new version is available.
- 📱 **Custom Splash Screens** → Native-like smooth startup screens.
- 📅 **Smart Filters** → Filter tasks by **Today**, **This Week**, or a **custom date range**.
- 🚨 **Task Priority Levels** → Assign **Critical**, **High**, or **Medium** priority to tasks with color-coded labels.

---

### 📅 Task Filters

Organize your tasks using built-in filters:

- **Today** → Shows only tasks due today
- **This Week** → Displays tasks due within the current week
- **Custom Date Range** → Select a custom date range using date pickers

<img src="new_screenshot/filter_show_home.png" width="500px" />

---

### 🚨 Task Priority Levels

While adding or editing a task, you can now assign **priority levels**:

- 🔴 **Critical** (red)
- 🟡 **High** (yellow)
- 🟣 **Medium** (purple)

Each task card displays:

- A **colored circle** representing the priority
- A **priority label** (Critical / High / Medium)

<img src="new_screenshot/priority_add.png" width="500px" />

---

## 👨‍💻 Installation

To install and run the project locally, follow these steps:

- Clone the repository: `git clone https://github.com/maciekt07/TodoApp.git`
- Navigate to the project directory: `cd TodoApp`
- Install the dependencies: `npm install`
- Start the development server: `npm run dev`

The app will now be running at [http://localhost:5173/](http://localhost:5173/).

> [!TIP]
> For mobile device testing, use `npm run dev:host` to preview the app on your local network with HTTPS (required for camera features) and a QR code in the terminal for quick access. To enable PWA features in development, see `vite.config.ts`.

## 📷 Screenshots

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ss1.png" width="300px" />
<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ss2.png" width="300px" />

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/ss3.png" width="300px" />

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/sspc1.png" width="650px" />

<img src="new_screenshot/filter_all.png" width="650px" />
<img src="new_screenshot/filter.jpeg" width="650px" />
<img src="new_screenshot/priority_add.png" width="650px" />
<img src="new_screenshot/Priority_edit.png" width="650px" />

## 🚀 Performance

<img src="https://raw.githubusercontent.com/maciekt07/TodoApp/main/screenshots/performance.png" width="600px" />

## Credits

licensed under [MIT](https://github.com/maciekt07/TodoApp/blob/main/LICENSE).

