const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected route
router.get('/private', auth, (req, res) => {
  res.json({ message: `Welcome to your dashboard, User ID: ${req.user}` });
});


module.exports = router;
