const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    first_name: { type: String},
    last_name: { type: String },
    username: { type: String},
    is_premium: { type: String },
    language_code: { type: String},
    energy: { type: Number, default: 250 },
    taps: { type: Number, default: 0 },
    boosts: { type: Number, default: 0 },
    lastEnergyUpdate: { type: Date, default: Date.now },
    refillRate: { type: Number, default: 1 }, // energy points per minute
});

module.exports = mongoose.model('User', userSchema);
