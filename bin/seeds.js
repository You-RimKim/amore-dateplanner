// bin/seeds.js

const mongoose = require('mongoose');

const Ideas = require('../models/Ideas.model');
const MONGO_URI = process.env.MONGODB_URI || 'mmongodb+srv://damore:VmTjhD5dzpFeLVpf@cluster0.f7ekpkp.mongodb.net/ideas';

const Ideas = [
    {
      dateIdea: "Picnic in the Park",
      location: "outdoor",
      adventurelevel: "Not at all",
      budget: "low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Indoor Cooking Class",
      location: "Indoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Hiking in the Mountains",
      location: "Outdoor",
      adventurelevel: "Very",
      budget: "Low",
      duration: "Half a day",
    },
    {
      dateIdea: "Visit an Escape Room",
      location: "Indoor",
      adventurelevel: "Very",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Beach Sunset Watching",
      location: "Outdoor",
      adventurelevel: "Not at all",
      budget: "Low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Hot Air Balloon Ride",
      location: "Outdoor",
      adventurelevel: "Very",
      budget: "High",
      duration: "Half a day",
    },
    {
      dateIdea: "Art Gallery Visit",
      location: "Indoor",
      adventurelevel: "Not at all",
      budget: "Low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Indoor Trampoline Park",
      location: "Indoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Camping in the Wilderness",
      location: "Outdoor",
      adventurelevel: "Very",
      budget: "Low",
      duration: "Weekend",
    },
    {
      dateIdea: "Wine Tasting Tour",
      location: "Outdoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Half a day",
    },
    {
      dateIdea: "Wine Tasting Tour",
      location: "Outdoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Half a day",
    },
    {
      dateIdea: "Stroll in the Botanical Garden",
      location: "Outdoor",
      adventurelevel: "Not at all",
      budget: "Low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Movie Night at Home",
      location: "Indoor",
      adventurelevel: "Not at all",
      budget: "Low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Mini Golf",
      location: "Outdoor",
      adventurelevel: "Not at all",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Explore a Science Museum",
      location: "Indoor",
      adventurelevel: "Not at all",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Canoeing on the Lake",
      location: "Outdoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Half a day",
    },
    {
      dateIdea: "Visit a Historical Landmark",
      location: "Outdoor",
      adventurelevel: "Somewhat",
      budget: "Low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Wine and Paint Night",
      location: "Indoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Horseback Riding",
      location: "Outdoor",
      adventurelevel: "Somewhat",
      budget: "High",
      duration: "Half a day",
    },
    {
      dateIdea: "Try Indoor Skydiving",
      location: "Indoor",
      adventurelevel: "Very",
      budget: "High",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Road Trip to a Nearby Town",
      location: "Outdoor",
      adventurelevel: "Very",
      budget: "Medium",
      duration: "Weekend",
    },
    {
      dateIdea: "Visit an Aquarium",
      location: "Indoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Visit an Aquarium",
      location: "Indoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Visit a Local Farmers' Market",
      location: "Outdoor",
      adventurelevel: "Not at all",
      budget: "Low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "DIY Craft Night at Home",
      location: "Indoor",
      adventurelevel: "Not at all",
      budget: "Low",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Rock Climbing at an Indoor Gym",
      location: "Indoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Bike Ride Along a Scenic Trail",
      location: "Outdoor",
      adventurelevel: "Somewhat",
      budget: "Low",
      duration: "Half a day",
    },
    {
      dateIdea: "Explore a Haunted House or Ghost Tour",
      location: "Outdoor",
      adventurelevel: "Somewhat",
      budget: "Medium",
      duration: "Half a day",
    },
    {
      dateIdea: "Go Kart Racing",
      location: "Outdoor",
      adventurelevel: "Very",
      budget: "High",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Wine and Cheese Tasting",
      location: "Indoor",
      adventurelevel: "Somewhat",
      budget: "High",
      duration: "Couple of hours",
    },
    {
      dateIdea: "Attend a Music Concert or Festival",
      location: "Outdoor",
      adventurelevel: "Very",
      budget: "High",
      duration: "Weekend",
    },
    {
      dateIdea: "Explore a Lighthouse and Watch the Sunset",
      location: "Outdoor",
      adventurelevel: "Very",
      budget: "Low",
      duration: "Half a day",
    },
];


mongoose
  .connect(MONGO_URI)
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.log(`An error occurred while creating books from the DB: ${err}`);
  });
  