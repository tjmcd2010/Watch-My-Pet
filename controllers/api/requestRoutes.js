const express = require('express');
const router = express.Router();
const { PetSittingRequest } = require('../../models');
const withAuth = require('../../utils/auth');

// Route for creating a new Pet Sitting request
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

// Route for deleting a Pet Sitting request
router.delete('requests/:id', withAuth, async (req, res) => {
  try {
    const deletedRequest = await PetSittingRequest.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deletedRequest) {
      res.status(404).json({ message: 'No request found with this id!' });
      return;
    }
    res.status(200).json(deletedRequest);
  } catch (err) {
    res.status(500).json(err);
  }  
});

module.exports = router;


