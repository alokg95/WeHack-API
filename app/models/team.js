var mongoose = require('mongoose');
<<<<<<< HEAD
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var teamSchema = mongoose.Schema({
  members: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  desiredSkills: [String],
  projectIdea: String,
  techStack: [String],
  capacity: Number,
  projectURL: String,
  createdBy: mongoose.Schema.ObjectId
=======

var teamSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    members: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    desiredSkills: [String],
    projectIdea: String,
    techStack: [String],
    capacity: Number,
    projectURL: String,
    createdBy: mongoose.Schema.ObjectId
>>>>>>> ae78efd42ac8ac6e4f775884276717cc376e94ba
});

module.exports = mongoose.model('Team', teamSchema);
