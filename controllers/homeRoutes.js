const router = require('express').Router();
const { PetSittingRequest, Owner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all PetSittingRequests and JOIN with user data
    // const PetSittingRequestData = await PetSittingRequest.findAll({
    //   include: [
    //     {
    //       model: Owner,
    //       attributes: ['ownerName'],
    //     },
    //     {
    //       model: PetSittingRequest,
    //       attributes: ['petName', 'petType', 'petBreed', 'petWeight', 'serviceType', 'serviceStartDate', 'serviceEndDate', 'ownerPhone'], 
    //       /**??????include owner_id??? */
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const requests = PetSittingRequestData.map((request) => request.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      layout: 'main',
      // requests, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/request', async (req, res) => {
  try {
    

    const requestData = await PetSittingRequest.findAll({
      include: [
        {
          model: Owner,
          attributes: ['ownerName'],
        }
      ],
    });
    
    const requests = requestData.map((request) => request.get({ plain: true }));

    res.render('request', {
      requests,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/request/:id', async (req, res) => {
  try {
    const requestData = await PetSittingRequest.findByPk(req.params.id, {
      include: [
        {
          model: Owner,
          attributes: ['ownerName'],
        }
      ],
    });

    const request = requestData.get({ plain: true });

    res.render('singlerequest', {
      ...request,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/create', async (req, res) => {
  // If the owner is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  const ownerData = await Owner.findByPk(req.session.owner_id);

  const owner = ownerData.get({ plain: true });

  res.render('createrequest', {...owner, logged_in: true});
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