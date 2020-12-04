const { Schema, model } = require('mongoose');

const Reminder = Schema({
    userID: String,
    reminder: {
        type: String,
        default: "Just because"
    },
    remind: Number
})

module.exports = model("Reminder", Reminder, "Reminder");