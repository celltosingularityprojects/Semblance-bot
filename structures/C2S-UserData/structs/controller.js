'use strict';

const mongoose = require('mongoose'),
    UserData = mongoose.model('UserData');

exports.list_userdata = function(req, res) {
  UserData.find({}, function(err, entry) {
    if (err) return res.send(err);
    res.status(200).json(entry);
  });
};


exports.write_userdata = function(req, res) {
  const new_entry = new UserData(req.body);
  new_entry.save(function(err, entry) {
    if (err) return res.send(err);
    res.status(200).json(entry);
  });
};


exports.read_userdata = function(req, res) {
  UserData.findOne({ playerId: req.params.playerId, playerToken: req.body.playerToken }, function(err, entry) {
    if (err) return res.send(err);
    res.status(200).json(entry);
  });
};


exports.update_userdata = function(req, res) {
  UserData.findOneAndUpdate({ playerId: req.params.playerId, playerToken: req.body.playerToken }, { metabits: req.body.metabits, edited_timestamp: Date.now() }, {new: true}, function(err, entry) {
    if (err) return res.send(err);
    res.status(200).json(entry);
  });
};


exports.delete_userdata = function(req, res) {
  UserData.findOneAndDelete({ 
    playerId: req.params.playerId,
    playerToken: req.body.playerToken
  }, function(err, entry) {
    if (err) return res.send(err);
    res.status(200).json({ message: 'User Data successfully deleted', discordId: entry.discordId });
  });
};