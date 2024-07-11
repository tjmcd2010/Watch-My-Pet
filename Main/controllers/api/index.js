const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const sitterRoutes = require('./sitterRoutes');

router.use('/owners', ownerRoutes);
router.use('/sitters', sitterRoutes);

module.exports = router;
