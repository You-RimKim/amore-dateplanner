const express = require('express');
const router = express.Router();

router.get('/datesuggestions', (req, res) => res.render('users/datesuggestions'));

module.exports = router;