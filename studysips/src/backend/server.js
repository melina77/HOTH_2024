const express = require('express');
const pool = require('./db');  // Import the pool you configured in db/index.js
const dataRoutes = require('./routes/dataRoutes'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api', dataRoutes);

// Sample endpoint that queries the database
app.get('/api/test', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// When you run your backend server (node backend/server.js), 
// it will start an Express server that listens for HTTP requests and can interact 
// with your PostgreSQL database.