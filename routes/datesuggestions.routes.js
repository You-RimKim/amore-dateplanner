const express = require('express');
const router = express.Router();

router.get('/date-suggestions', (req, res) => res.render('users/date-suggestions'));

module.exports = router;