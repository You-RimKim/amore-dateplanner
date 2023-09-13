// models/User.model.js

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    },
    outdoor_or_indoor: {
      type: String,
    },
    adventure_level: {
      type: String,
    },
    nightlife_type: {
      type: String,
    },
    cuisine_preference: {
      type: String,
    },
    activity_duration: {
      type: String,
    },
    romantic_or_casual: {
      type: String,
    },
    budget: {
      type: String,
    },
    interests_hobbies: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);
