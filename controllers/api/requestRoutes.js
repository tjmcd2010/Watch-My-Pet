// Create routes for requests
const express = require('express');
const router = express.Router();
const { PetSittingRequest } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        const newRequest = await PetSittingRequest.create({
            ...req.body,
            owner_id: req.session.owner_id,
          }

        );
        res.status(200).json(newRequest);
    
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;


