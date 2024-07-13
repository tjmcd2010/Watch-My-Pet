const router = require('express').Router();
const { PetSittingRequest, Owner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all PetSittingRequests and JOIN with user data
    const PetSittingRequestData = await PetSittingRequest.findAll({
      include: [
        {
          model: Owner,
          attributes: ['ownerName'],
        },
        {
          model: PetSittingRequest,
          attributes: ['petName', 'petType', 'petBreed', 'petWeight', 'serviceType', 'serviceStartDate', 'serviceEndDate', 'ownerPhone'], 
          /**??????include owner_id??? */
        },
      ],
    });

    // Serialize data so the template can read it
    const requests = PetSittingRequestData.map((request) => request.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      requests, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/request', withAuth, async (req, res) => {
  try {
    // Find the logged in owner by the session ID
    const ownerData = await Owner.findByPk(req.session.owner_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: PetSittingRequest }],
    });

    const owner = ownerData.get({ plain: true });

    res.render('request', {
      ...owner,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the owner is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/request');
    return;
  }

  res.render('login');
});

module.exports = router;