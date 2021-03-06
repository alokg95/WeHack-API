var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var userSchema = mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    email: String,
    password: String,
    token: String,
    skills: {type: Array, "default": []},
    name: String,
    hackathons: [{type: mongoose.Schema.ObjectId, ref: 'Hackathon'}],
    createdHackathons: [{type: mongoose.Schema.ObjectId, ref: 'Hackathon'}],
    joinedTeams: [{type: mongoose.Schema.ObjectId, ref: 'Team'}]
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.safeData = function () {
<<<<<<< HEAD
    return {id: this.id, name: this.name, email: this.email, token: this.token, skills: this.skills, hackathons: this.hackathons,
            createdHackathons = this.createdHackathons, joinedTeams = this.joinedTeams};
=======
    return {
        id: this.id,
        name: this.name,
        email: this.email,
        token: this.token,
        skills: this.skills,
        hackathons: this.hackathons,
        createdHackathons: this.createdHackathons,
        joinedTeams: this.joinedTeams
    };
>>>>>>> ae78efd42ac8ac6e4f775884276717cc376e94ba
};

module.exports = mongoose.model('User', userSchema);
