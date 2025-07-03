# 🎲 Tenzies Game

A fun and interactive dice game built with React!  
The goal of the game is to roll the dice until all dice show the same number.  
Players can hold dice to prevent them from rolling, strategically locking values until all match.

[🌐 Live Demo](https://monaraj.com/tenzies)  
[🔗 GitHub Repo](https://github.com/mona-raj/tenzies)

---

## 📸 Preview

![Tenzies Game Screenshot](public/Tenzies%20Preview.png)

---

## 🚀 Features

- 🎮 Interactive gameplay with real-time dice updates
- 🖱️ Click-to-hold mechanism for each die
- 🔁 Re-rolls only change unheld dice
- 🎉 Celebratory confetti animation on winning
- 🌙 Clean, minimal, and responsive UI

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Confetti](https://www.npmjs.com/package/react-confetti)

---

## 🧠 Game Rules

1. You start with 10 dice, each showing a random number between 1–6.
2. Click on a die to "hold" its current value.
3. Click "Roll" to re-roll all dice that are *not* held.
4. Continue until **all dice show the same number** and are held.

---

## 📂 Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
    git clone https://github.com/mona-raj/tenzies.git
    cd tenzies
   ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Start the development server
    ```bash
    npm run dev
    ```
4. Visit http://localhost:5173 to view the app.

---
