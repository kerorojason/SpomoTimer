const mongoose = require('mongoose');
const { Schema } = mongoose;
const TodoSchema = require('./Todo');

const userSchema = new Schema({
  spotifyId: String,
  spotifyAccessToken: String,
  spotifyRefreshToken: String,
  todos: [TodoSchema]
});

mongoose.model('users', userSchema);
