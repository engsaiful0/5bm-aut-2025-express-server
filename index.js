const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Example API route
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, API user!' });
});


// Root route
app.get('/', (req, res) => {
  res.send('Express API is running.');
});

// Test route - GET
app.get('/api/test', (req, res) => {
  res.json({ message: 'GET request successful!', status: 'OK' });
});

// Test route - POST
app.post('/api/test', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST request received!', received: data });
});

// Test route - PUT
app.put('/api/test/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `PUT request received for ID ${id}`, updated: updatedData });
});

// Test route - DELETE
app.delete('/api/test/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `DELETE request received for ID ${id}`, deleted: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
