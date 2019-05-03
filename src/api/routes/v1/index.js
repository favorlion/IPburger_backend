const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const serverRoutes = require('./server.route');
const l2tpCredRoutes = require('./l2tpCred.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/servers', serverRoutes);
router.use('/l2tpcred', l2tpCredRoutes);

module.exports = router;
