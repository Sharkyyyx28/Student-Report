# Student Speaking Assessment Report 📊

## 📌 Project Overview
This project is a functional frontend prototype designed to simulate a Student Speaking Assessment Report, similar to platforms like **SpeechAce** or **IELTS**.

It visualizes a candidate's speaking skills (Pronunciation, Fluency, Vocabulary, Grammar) using a modern, responsive UI with interactive charts and dynamic feedback logic.

**Live Preview:** [Insert your Vercel/Netlify link here if you deploy it]

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS (Modern "Bento" grid layout, Gradients)
* **Visualization:** Chart.js (Radar Chart for skill analysis)
* **Icons/Fonts:** Standard SVG icons and Sans/Serif typography for document feel.

---

## 🚀 How to Run the Project
This project uses **Vite** for a fast development experience.

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-link>
    cd student-report
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Click the link shown in the terminal (usually `http://localhost:5173/`).

---

## 📂 Data Storage (Backend Simulation)
**Location:** `src/data/studentData.js`

Per **Option 1** of the assignment requirements, this project does not use a complex database. Instead, it uses a local JSON object to simulate an API response.

You can modify the `overall_score` or individual skill scores in this file to test how the UI adapts (e.g., changing the score to 5.0 will change the theme to Red/Orange).

```javascript
export const studentData = {
  id: "a497b39391",
  name: "Student Candidate",
  date: "2025-12-26",
  overall_score: 7.0, // Try changing this!
  skills: {
    pronunciation: 8.5,
    fluency: 9.0,
    // ...
  }
};
