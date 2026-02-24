## JavaScript Quiz Dataset Collector

Interactive JavaScript knowledge quiz designed to **collect research data** about developers’ skills and behaviour. It runs entirely in the browser and posts anonymised quiz metadata to a Google Apps Script backend for storage (e.g. Google Sheets).

### Purpose

- **Measure JavaScript knowledge** across different difficulty levels.
- **Capture behavioural signals** such as:
  - Time (in seconds) spent on each question.
  - Declared experience in years and self‑rated skill.
  - Basic anti‑cheating events (tab switching, right‑click, dev‑tools shortcuts).
- **Produce a structured dataset** suitable for analysis in academic or industry research.

### Key Features

- **Intro modal with participant metadata**
  - Email address (validated format).
  - Years of JavaScript experience, dynamically capped to the age of JavaScript (1995 → current year).
  - Self‑rated skill (1–5).

- **Quiz engine**
  - Question bank defined in `questions.js` with `id`, `question`, `options`, `answer`, and `difficulty`.
  - On each run, **10 random unique questions** are selected.
  - Users can navigate **Previous / Next**, and change answers.
  - `Next`/`Submit` is disabled until the current question has an answer.
  - Pressing **Enter** after selecting an option moves to the next question (or submits on the last).

- **Timing & scoring**
  - Per‑question timer measuring **seconds spent**; revisits accumulate time.
  - Total quiz score computed client‑side from correct answers.
  - Submission payload sends:
    - Participant metadata.
    - For each question: `questionId`, `difficulty`, `timeSpent` (seconds).
    - `totalScore`.

- **Anti‑cheating measures**
  - Disables:
    - Right‑click / context menu.
    - Common dev‑tools shortcuts (F12, Ctrl+Shift+I/J, Ctrl+U, copy/paste/cut).
  - Detects:
    - Window blur (minimise or focus loss).
    - Tab visibility changes (tab switching).
  - On suspicious behaviour:
    - Quiz is **immediately reset**, user is returned to the intro modal.
    - A new random set of 10 questions is generated.
    - A clear alert explains that suspicious behaviour was detected.

- **Modern UI**
  - Dark, glassmorphism‑style layout with responsive design.
  - Keyboard‑ and mouse‑friendly controls.

### Tech Stack

- **Frontend**: HTML5, modern CSS, vanilla JavaScript (no framework).
- **Backend endpoint**: Google Apps Script HTTP endpoint (JSON `POST`) – provided by you.

### Project Structure

- `index.html` – Root page, includes intro modal, quiz container, and thank‑you modal.
- `styles.css` – All layout and visual styling.
- `questions.js` – Static array of question objects.
- `script.js` – Quiz logic, timing, anti‑cheat, validation, and submission.

### Getting Started

1. **Clone / download** this repository into your environment.
2. Ensure all files (`index.html`, `styles.css`, `questions.js`, `script.js`) are in the same directory.
3. Serve the folder with any static HTTP server, for example:

   ```bash
   # using Node's http-server (install once)
   npm install -g http-server

   # from project root
   http-server .
   ```

4. Open the printed URL (e.g. `http://localhost:8080`) in a modern browser.

> You can also open `index.html` directly in a browser, but some browsers restrict `fetch` from `file://` URLs. Using a simple HTTP server is recommended.

### Configuring the Google Apps Script Endpoint

1. Create a new **Google Apps Script** bound to a spreadsheet (or standalone) that accepts JSON `POST` requests and appends rows to a sheet.
2. Deploy it as a **web app** and allow **Anyone with the link** to access (or your chosen auth model).
3. Copy the generated web app URL.
4. In `script.js`, update the `fetch` call inside `finishQuiz()` to use your script URL:

   ```js
   const response = await fetch('YOUR_APPS_SCRIPT_WEB_APP_URL', {
     method: 'POST',
     body: JSON.stringify(payload)
   });
   ```

5. Confirm that submissions from the quiz appear as new rows in your Google Sheet.

### Data Schema

On successful completion, the frontend submits a JSON payload like:

```json
{
  "email": "user@example.com",
  "yearsExperience": "3",
  "selfRating": "4",
  "answers": [
    {
      "questionId": 12,
      "difficulty": "medium",
      "timeSpent": 27
    }
    // ... 9 more entries
  ],
  "totalScore": 7
}
```

You can extend the Apps Script to:

- Record timestamps of submissions.
- Log browser / user agent if required.
- Add flags for suspicious behaviour based on your own criteria.

### Limitations & Notes

- **Client‑side only enforcement**: Anti‑cheating is best‑effort. Determined users can still use external devices or bypass JavaScript.
- **Question pool**: All questions are defined statically in `questions.js`. To change or expand the pool, edit this file and respect the existing object structure.
- **Privacy**: This project collects email and quiz metadata. Ensure that you:
  - Inform participants about what is stored and why.
  - Comply with your organisation’s privacy and ethics requirements.

### Customisation

- Add or edit questions in `questions.js` (adjust `difficulty` tags as needed).
- Tweak UI visuals in `styles.css` to match your branding.
- Extend the payload in `finishQuiz()` if you need more signals (e.g. number of focus losses).