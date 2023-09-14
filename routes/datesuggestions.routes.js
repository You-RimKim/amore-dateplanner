const mongoose = require('mongoose');
const User = require('../models/User.model');
const express = require('express');
const Ideas = require('../models/Ideas.model');
const router = express.Router();
//const uri = 'mongodb+srv://damore:VmTjhD5dzpFeLVpf@cluster0.f7ekpkp.mongodb.net/test.idea';

router.post('/questionnaire', (req, res, next) => {
  console.log(req.body)
  
  // const { location, adventurelevel, budget, duration } = req.body;

  User.findByIdAndUpdate(req.session.currentUser._id, {
    questionnaire: req.body
  }, { new: true })
  .then((updatedUser) => {
    const {
    location,
    adventurelevel,
    budget,
    duration
  } = updatedUser.questionnaire
    console.log(updatedUser.questionnaire)
    Ideas.find({ adventurelevel: adventurelevel, budget: budget, duration: duration })
    .then((foundIdeas) => res.render('users/datesuggestions', {dateIdeas: foundIdeas}))
  })


});




module.exports = router;