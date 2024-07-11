const router = require('express').Router();
const { Owner } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const ownerData = await Owner.create(req.body);

    req.session.save(() => {
      req.session.user_id = ownerData.id;
      req.session.logged_in = true;

      res.status(200).json(ownerData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const ownerData = await Owner.findOne({ where: { email: req.body.email } });

    if (!ownerData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await ownerData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = ownerData.id;
      req.session.logged_in = true;
      
      res.json({ owner: ownerData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
