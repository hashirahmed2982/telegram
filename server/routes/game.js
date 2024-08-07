const express = require('express');
let userSchema = require('../models/user');
const router = express.Router();

const calculateEnergyRefill = async (user) => {
    const now = new Date();
    const timeDiff = Math.floor((now - user.lastEnergyUpdate) / 60000); // time difference in minutes
    const energyToAdd = timeDiff * user.refillRate;
    user.energy = Math.min(user.energy + energyToAdd, 100); // assuming 100 is the max energy
    user.lastEnergyUpdate = now;
    return await user.save();
};
// Route to get user data
router.get('/user/:username', async (req, res) => {
    try {
        const user = await userSchema.findOne({ username: req.params.username });
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});
router.post('/loginuser', async (req, res) => {
    const { id, first_name, last_name, username ,is_premium ,language_code } = req.body;
    console.log(id);
    try {
        let user = await userSchema.findOne({ id });
        if (!user) {
            user = new User({ id, first_name, last_name, username ,is_premium ,language_code});
            await user.save();
        } else {
            await calculateEnergyRefill(user);
        }
        res.send(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Route to create a new user
router.post('/user', async (req, res) => {
    const { username } = req.body;
    try {
        let user = await userSchema.findOne({ username });
        if (user) return res.status(400).send('User already exists');

        user = new User({ username });
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Route to update user data (e.g., taps, boosts, energy)
router.put('/user/:username', async (req, res) => {
    const { taps, boosts, energy } = req.body;
    try {
        let user = await userSchema.findOne({ username: req.params.username });
        if (!user) return res.status(404).send('User not found');

        if (taps !== undefined) user.taps = taps;
        if (boosts !== undefined) user.boosts = boosts;
        if (energy !== undefined) user.energy = energy;

        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
