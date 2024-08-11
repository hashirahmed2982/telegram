const express = require('express');
let userSchema = require('../models/user');
const refferal = require('../models/refferal');
const router = express.Router();

const calculateEnergyRefill = async (user) => {
    const now = new Date();
    const timeDiff = Math.floor((now - user.lastEnergyUpdate) / 60000); // time difference in minutes
    const energyToAdd = timeDiff * user.refillRate;
    user.energy = Math.min(user.energy + energyToAdd, user.totalenergy); // assuming 100 is the max energy
    user.lastEnergyUpdate = now;
    return await user.save();
};
const CheckReferal = async (ref) => {
    try {
        // Find the user with the given ref id

    } catch (error) {
        console.error('Error processing referral:', error);
    }
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
    const { id, first_name, last_name, username, is_premium, language_code, refferallink } = req.body;
    console.log(id);
    try {
        let user = await userSchema.findOne({ id });
        if (!user) {
            const user1 = await userSchema.findOne({ id: ref });

            if (user1) {
                // Increase the user's taps by 100
                user1.taps += 100;
                await user1.save();

                // Create a new referral document
                const newReferral = new refferal({
                    referrerId: user1.id,
                    referredId: ref, // Assuming user.id is the referredId
                    referredName: first_name + last_name || 'Unknown', // You can use another field if needed
                    reward: 100 // Set the reward as needed
                });

                // Save the new referral document
                await newReferral.save();

                console.log('User taps updated and referral saved successfully.');
                user = new userSchema({ id, first_name, last_name, username, is_premium, language_code, refferallink, taps: 100 });
                await user.save();
            } else {
                console.log('User not found.');
                user = new userSchema({ id, first_name, last_name, username, is_premium, language_code, refferallink });
                await user.save();
            }

        } else {
            await calculateEnergyRefill(user);
        }
        res.send(user);
    } catch (error) {
        res.status(500).send('Server error');
        console.log(error);
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
router.put('/user/:id', async (req, res) => {
    const { taps, boosts, energy } = req.body;
    try {
        let user = await userSchema.findOne({ id: req.params.id });
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
