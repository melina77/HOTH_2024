const express = require('express');
// const client = require('./db');  // Import the pool you configured in db/index.js
// const dataRoutes = require('./routes/dataRoutes'); // Adjust the path as necessary

const app = express();
const PORT = 3001;

app.use(express.json());

// app.use('/api', dataRoutes);

// // Sample endpoint that queries the database
// app.get('/api/test', async (req, res) => {
//   try {
//     const { rows } = await pool.query('SELECT NOW()');
//     res.json(rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

const { Client } = require('pg');
const password = require('../constants.js');
 
const client = new Client({
  host: 'studysips-db.cbkocewoeib2.us-east-2.rds.amazonaws.com',
  port: 5432,
  database: 'studysips-db',
  user: 'postgres',
  password: password,
})

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');

    const res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message); // Hello world!
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// When you run your backend server (node backend/server.js), 
// it will start an Express server that listens for HTTP requests and can interact 
// with your PostgreSQL database.