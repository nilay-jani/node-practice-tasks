# Node Practice Tasks

This repository contains solutions for the 3 Node.js practice tasks from Kodyfier.

## Directory Structure

```text
node-practice-tasks/
├── task-1-folder-report/
│   ├── package.json
│   └── report.js
├── task-2-contact-api/
│   ├── package.json
│   └── app.js
└── task-3-courses-api/
    ├── data/
    │   └── courses.json
    ├── package.json
    └── app.js
```

---

## Task 1: Folder Report (`task-1-folder-report`)
Reads files in the directory and logs detailed metadata (name, extension, size in KB, isFile, isDirectory).

### Run:
```bash
cd task-1-folder-report
node report.js
```

---

## Task 2: Contact Form API (`task-2-contact-api`)
Express API to handle contact form submissions with in-memory storage.

### Endpoints:
- `POST /api/contact` - Accepts `{ "name": "...", "email": "...", "message": "..." }`
- `GET /api/contact` - Returns all saved messages

### Bonus Included:
- Cleans email with `.trim().toLowerCase()` before saving.

### Run:
```bash
cd task-2-contact-api
npm install
node app.js
```

---

## Task 3: Kodyfier Courses API (`task-3-courses-api`)
Express API using `node:fs/promises` to read and serve course data from a JSON file.

### Endpoints:
- `GET /api/courses` - Returns all 4 courses
- `GET /api/courses/:id` - Returns a single course by id (returns 404 if not found)
- `GET /api/courses?category=frontend` *(Bonus 2)* - Filters courses by category
- `GET /api/health` *(Bonus 3)* - Returns OS platform, CPU cores, and free memory

### Run:
```bash
cd task-3-courses-api
npm install
node app.js
```
