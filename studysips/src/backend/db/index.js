import { password, username } from constants.js

const { Pool } = require('pg');

const pool = new Pool({
  user: username,
  host: 'studysips-db.cbkocewoeib2.us-east-2.rds.amazonaws.com',
  database: 'studysips-db',
  password: password,
  port: 5432,
  // For SSL connection in production, we might need additional configuration
});

module.exports = pool;
