const express = require('express');
const router = express.Router();

router.get('/datesuggestions', (req, res) => res.render('users/datesuggestions'));

const Ideas = require('../bin/seeds');

const categorizedDateIdeas = {};

for (const idea of Ideas) {
    const { budget, location, duration } = idea;
    const categoryKey = `${budget.toLowerCase()}${location.toLowerCase()}${duration.split(' ').join('')}`;

    if (!categorizedDateIdeas[categoryKey]) {
        categorizedDateIdeas[categoryKey] = [];
    }

    categorizedDateIdeas[categoryKey].push(idea);
}

console.log(categorizedDateIdeas);



module.exports = router;


