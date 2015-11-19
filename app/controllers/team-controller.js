var mongoose = require('mongoose');
var User = require('../models/user');
<<<<<<< HEAD
var team = require('../models/team');

function createTeam(req, res){
  var team = new Team();
  team.id = mongoose.Types.ObjectId();
  team.desiredSkills = req.body.desiredSkills;
  team.projectIdea = req.body.projectIdea;
  team.techStack = req.body.techStack;
  team.capacity = req.body.capacity;
  team.projectURL = req.body.projectURL;
  User.findOne({token:req.token},function(err,creator){
    team.createdBy = creator;
    team.save(function(err, savedTeam){
        if(err){
          res.json({type: false, data: "Error occured while fetching createdBy.id: " + createdBy.id});
        } else {
          creator.joinedTeams.push(savedTeam.id);
          creator.save(function(){
            res.json({type: true, data: savedTeam.data()});
          })
        }
    )}
  });
}

function joinTeam(req, res){
  Team.findOne({id: mongoose.Types.ObjectId(req.body.team_id)}, function(err, team){
    if(err || team == null){
      res.json({type: false,data: "Error occured while fetching team."});
    } else {
      User.findOne({token: req.token}, function(err, participant){
        team.members.push(participant);
        team.save(function(err, savedTeam){
          participant.joinedTeams.push(savedTeam.id);
          participant.save(function(err, savedParticipant){
            res.json({type: true, data: {team: savedTeam.data(), participant: savedParticipant.safeData()}});
          });
        });
      });
    };

  });
}

module.exports.createTeam = createTeam;
module.exports.joinTeam = joinTeam;
=======
var Team = require('../models/team');

function createTeam(req, res) {
    var team = new Team();
    team.id = mongoose.Types.ObjectId();
    team.desiredSkills = req.body.desiredSkills;
    team.projectIdea = req.body.projectIdea;
    team.techStack = req.body.techStack;
    team.capacity = req.body.capacity;
    team.projectURL = req.body.projectURL;
    User.findOne({token: req.token}, function (err, creator) {
        team.createdBy = creator;
        team.members.push(creator);
        team.save(function (err, savedTeam) {
            if (err) {
                res.json({type: false, data: "Error occured while fetching createdBy.id: " + createdBy.id});
            } else {
                creator.joinedTeams.push(savedTeam.id);
                creator.save(function () {
                    res.json({type: true, data: savedTeam});
                })
            }
        })
    });
}

function joinTeam(req, res) {
    Team.findOne({id: mongoose.Types.ObjectId(req.body.team_id)}, function (err, team) {
        if (err || team == null) {
            res.json({type: false, data: "Error occured while fetching team."});
        } else {
            User.findOne({token: req.token}, function (err, participant) {
                team.members.push(participant);
                team.save(function (err, savedTeam) {
                    participant.joinedTeams.push(savedTeam);
                    participant.save(function () {
                        res.json({
                            type: true,
                            data: savedTeam
                        });
                    });
                });
            });
        }
    });
}

function allTeams(req, res) {
    Team.find({}, function (err, teams) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured while fetching all teams"
            });
        }
        res.send(teams);
    });
}

function getTeam(req, res) {
    Team.findOne({id: mongoose.Types.ObjectId(req.params.id)}).populate('members').exec(function (err, team) {
        res.json({
            type: true,
            data: team
        });
    });
}


module.exports.createTeam = createTeam;
module.exports.joinTeam = joinTeam;
module.exports.allTeams = allTeams;
module.exports.getTeam = getTeam;

>>>>>>> ae78efd42ac8ac6e4f775884276717cc376e94ba
