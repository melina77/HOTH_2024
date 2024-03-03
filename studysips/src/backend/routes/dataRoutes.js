const express = require('express');
const router = express.Router();
const pool = require('../db'); // Adjust the path as necessary

// Route to get data from your table
router.get('/data', async (req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM public.business"); // Replace your_table_name with your actual table name
        res.json(allData.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
