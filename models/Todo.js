const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  id: String,
  text: String,
  completed: { type: Boolean, default: false },
  count: { type: Number, default: 0 }
});

module.exports = TodoSchema;
