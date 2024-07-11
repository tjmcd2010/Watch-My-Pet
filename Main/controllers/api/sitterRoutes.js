const router = require('express').Router();
const { Sitter } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSitter = await Sitter.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSitter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const sitterData = await Sitter.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!sitterData) {
      res.status(404).json({ message: 'No sitter found with this id!' });
      return;
    }

    res.status(200).json(sitterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
