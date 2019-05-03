const httpStatus = require('http-status');
const { omit } = require('lodash');
const Server = require('../models/server.model');

/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
      const Servers = await Server.list(req.query);
      res.json(Servers);
    } catch (error) {
      next(error);
    }
};