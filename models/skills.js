const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  skill: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Skill', skillSchema);
