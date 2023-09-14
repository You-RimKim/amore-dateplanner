const { Schema, model } = require('mongoose');

const ideasSchema = new Schema(

  {
    dateIdea: String,
    location: String,
    adventurelevel: String,
    budget: String,
    duration: String,
  },

  {
    timestamps: true
  }
);

module.exports = model('Ideas', ideasSchema);
