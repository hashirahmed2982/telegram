const express = require('express');
let userSchema = require('../models/user');
const refferal = require('../models/refferal');
const router = express.Router();

router.get('/referalslist/:id', async (req, res) => {
    try {
        // Find all referrals with the given referrerId
        const referrals = await refferal.find({ referrerId: req.params.id });
        
       

        res.send(referrals);
    } catch (error) {
        console.error('Error fetching referrals:', error);
        res.status(500).send('Server error');
    }
})
module.exports = router;