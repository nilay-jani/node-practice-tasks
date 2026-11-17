import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const app = express();
const filePath = path.join(import.meta.dirname, "data", "course.json");

app.get("/api/courses", async (req, res) => {
  try {
    // TODO 1: read the file -> await fs.readFile(filePath, "utf-8")
    const data = await fs.readFile(filePath, "utf-8");

    // TODO 2: convert to object -> JSON.parse(data)
    const courses = JSON.parse(data);

    // Bonus 2: /api/courses?category=frontend should return only frontend courses
    const { category } = req.query;
    if (category) {
      const filtered = courses.filter(
        (c) => c.category.toLowerCase() === category.toLowerCase(),
      );
      return res.json(filtered);
    }

    // TODO 3: send it -> res.json(courses)
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to read courses data" });
  }
});

app.get("/api/courses/:id", async (req, res) => {
  try {
    // TODO 4: read the file and JSON.parse it (same as above)
    const data = await fs.readFile(filePath, "utf-8");
    const courses = JSON.parse(data);

    // TODO 5: get the id -> Number(req.params.id)
    const id = Number(req.params.id);

    // TODO 6: find the course -> courses.find((c) => c.id === id)
    const course = courses.find((c) => c.id === id);

    // TODO 7: not found -> res.status(404).json({ message: "Course not found" })
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // TODO 8: found -> res.json(course)
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to read course data" });
  }
});

// Bonus 3: create GET /api/health that sends the platform, CPU cores and free memory using the os module
app.get("/api/health", (req, res) => {
  res.json({
    platform: os.platform(),
    cpuCores: os.cpus().length,
    freeMemory: `${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
