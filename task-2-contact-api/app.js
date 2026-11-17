import express from "express";

const app = express();

app.use(express.json());

const messages = [];

// POST API - Receive contact messages
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body ?? {};

  //! TODO 1: Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  //! TODO 2: Create and save message
  // Bonus: clean email with trim() and toLowerCase()
  const newMessage = {
    id: messages.length + 1,
    name,
    email: email.trim().toLowerCase(),
    message,
  };

  messages.push(newMessage);

  //! TODO 3: Send success response
  res.status(201).json({
    success: true,
    message: `Thanks ${name}!`,
  });
});

// GET API - Show all contact messages
app.get("/api/contact", (req, res) => {
  res.json(messages);
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
