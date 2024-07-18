const router = require('express').Router();
const ownerRoutes = require('./ownerRoutes');
const requestRoutes = require('./requestRoutes');

router.use('/owners', ownerRoutes);
router.use('/request', requestRoutes);

module.exports = router;
