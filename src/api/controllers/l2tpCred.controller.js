const httpStatus = require('http-status');
const { omit } = require('lodash');
const L2tpCred = require('../models/l2tpCred.model');

/**
 * Get user
 * @public
 */
exports.get = async(req, res, next) => {
    try {
        const l2tpCred = await L2tpCred.get(req.user.id);
        res.json(l2tpCred.transform());
    } catch (error) {
        next(error);
    }
};