// businessController.js
// one functionality: createBusinessProfile
const pool = require('./db');

async function createBusinessProfile(req, res) {
  const { wifi, noise, cost, address, category, upvotes, website } = req.body;

  try {
    const query = 'INSERT INTO business(wifi, noise, cost, address, category, upvotes, website) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const values = [wifi, noise, cost, address, category, upvotes, website];

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating business profile");
  }
}

async function getBusinessesSortedByUpvotes(req, res) {
    try {
      const query = 'SELECT * FROM business ORDER BY upvotes DESC';
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching businesses sorted by upvotes");
    }
  }

module.exports = { createBusinessProfile, getBusinessesSortedByUpvotes };