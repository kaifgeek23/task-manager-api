// models/Task.js

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Task", taskSchema);