const express = require('express');
const router = express.Router();
// const pool = require('../db'); // Adjust the path as necessary
const businessController = require('./businessController');
const userController = require('./userController');

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

// Route for creating a business profile
router.post('/api/business', businessController.createBusinessProfile);

// Route for fetching businesses sorted by upvotes
router.get('/api/businesses/sorted', businessController.getBusinessesSortedByUpvotes);

// User functionalities
// Route for leaving a comment on a business
router.post('/api/comment', userController.leaveComment);

// Route for saving a business to user's favorites
router.put('/api/user/favorites', userController.saveBusinessToFavorites);

// Route for user sign up
router.post('/api/user/signup', userController.signUp);

module.exports = router;