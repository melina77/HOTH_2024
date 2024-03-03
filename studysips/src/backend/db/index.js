const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'studysips-db.cbkocewoeib2.us-east-2.rds.amazonaws.com',
  database: 'studysips-db',
  password: 'studysips',
  port: 5432,
  // For SSL connection in production, we might need additional configuration
});

module.exports = pool;
