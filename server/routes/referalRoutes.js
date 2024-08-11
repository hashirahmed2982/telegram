const express = require('express');

const refferal = require('../models/refferal');
const router = express.Router();

router.get('/referalslist/:id', async (req, res) => {
    console.log("ref",req.params.id)
    try {
        // Find all referrals with the given referrerId
        const referrals = await refferal.find({ referrerId: req.params.id });
        
    console.log("refa",referrals)
       

        res.send(referrals);
    } catch (error) {
        console.error('Error fetching referrals:', error);
        res.status(500).send('Server error');
    }
})
module.exports = router;