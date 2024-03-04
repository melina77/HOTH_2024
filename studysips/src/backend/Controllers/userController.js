// userController.js
// 3 functionalities: leaveComment, saveBusinessToFavorites, signUp
const pool = require('./db');

async function leaveComment(req, res) {
  const { user_id, business_id, text, photo } = req.body;

  try {
    const query = 'INSERT INTO comment(user_id, business_id, text, photo) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [user_id, business_id, text, photo];

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error leaving a comment");
  }
}

async function saveBusinessToFavorites(req, res) {
  const { ususer_iderId, business_id } = req.body;

  try {
    const query = 'UPDATE personal_users SET favorites = array_append(favorites, $1) WHERE user_id = $2 RETURNING *';
    const values = [business_id, user_id];

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving business to favorites");
  }
}

async function signUp(req, res) {
    const { name, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const userExistsQuery = 'SELECT * FROM personal_users WHERE email = $1';
      const userExists = await pool.query(userExistsQuery, [email]);
  
      if (userExists.rows.length > 0) {
        return res.status(400).send({ success: false, message: "Email already in use." });
      }
  
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Insert the new user into the database
      const insertUserQuery = 'INSERT INTO personal_users(name, email, password, date_joined) VALUES($1, $2, $3, NOW()) RETURNING *';
      const values = [name, email, hashedPassword];
  
      const result = await pool.query(insertUserQuery, values);
      // Exclude password from the response for security
      const { password: _, ...userData } = result.rows[0];
      res.status(201).json({ success: true, user: userData });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error signing up user");
    }
  }
  
  module.exports = { leaveComment, saveBusinessToFavorites, signUp };