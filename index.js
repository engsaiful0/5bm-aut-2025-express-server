const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load env vars
require('./config/db'); // This initializes the MongoDB connection

const Contact = require('./models/Contact'); // Import your Mongoose model

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, address } = req.body;
    const newContact = new Contact({ name, email, message, address });
    const saved = await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully!', contact: saved });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
