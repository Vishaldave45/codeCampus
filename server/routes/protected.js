const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/dashboard', auth, (req, res) => {
  res.json({ message: `Welcome, user ${req.user}. This is your protected dashboard.` });
});

module.exports = router;
