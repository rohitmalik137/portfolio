const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  resumeUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Resume', resumeSchema);
