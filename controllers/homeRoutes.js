const router = require('express').Router();
const { Sitter, Owner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const sitterData = await Sitter.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const sitters = sitterData.map((project) => sitter.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      sitters, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/sitter/:id', async (req, res) => {
  try {
    const sitterData = await Sitter.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const sitter = sitterData.get({ plain: true });

    res.render('sitter', {
      ...sitter,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const ownerData = await Owner.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Sitter }],
    });

    const owner = ownerData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
