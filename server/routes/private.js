const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected route
router.get('/', auth, (req, res) => {
  res.json({ message: `Welcome! This is a protected route. User ID: ${req.user}` });
});

module.exports = router;
