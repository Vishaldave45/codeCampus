const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/dashboard', auth, (req, res) => {
  res.json({ msg: `Welcome to the dashboard, user ID: ${req.user.id}` });
});

module.exports = router;
