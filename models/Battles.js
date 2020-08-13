const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BattlesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
    },
    battle_number: {
        type: String,
    },
    attacker_king: {
        type: String,
    },
    defender_king: {
        type: String,
    },
    attacker_1: {
        type: String,
    },
    attacker_2: {
        type: String,
    },
    attacker_3: {
        type: String,
    },
    attacker_4: {
        type: String,
    },
    defender_1: {
        type: String,
    },
    defender_2: {
        type: String,
    },
    defender_3: {
        type: String,
    },
    defender_4: {
        type: String,
    },
    attacker_outcome: {
        type: String,
    },
    battle_type: {
        type: String,
    },
    major_death: {
        type: String,
    },
    major_capture: {
        type: String,
    },
    attacker_size: {
        type: String,
    },
    defender_size: {
        type: String,
    },
    attacker_commander: {
        type: String,
    },
    defender_commander: {
        type: String,
    },
    summer: {
        type: String,
    },
    location: {
        type: String,
    },
    region: {
        type: String,
    },
    note: {
        type: String,
    },
});

module.exports = mongoose.model("Battles", BattlesSchema);