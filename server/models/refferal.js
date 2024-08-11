const mongoose = require('mongoose');

const refferalSchema = new mongoose.Schema({
    referrerId: { type: String, required: true },
    referredId: { type: String, required: true },
    referredName: { type: String, required: true },
    joinedAt: { type: Date, default: Date.now },
    reward: { type: Number, default: 0 } // energy points per minute
});

module.exports = mongoose.model('Refferal', refferalSchema);
