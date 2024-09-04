const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  day: String,
  startTime: String,
  endTime: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  availability: [availabilitySchema],
  notificationPreferences: {
    email: Boolean,
    sms: Boolean,
  },
});

module.exports = mongoose.model('User', userSchema);
