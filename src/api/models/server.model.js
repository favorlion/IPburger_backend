const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const APIError = require('../utils/APIError');

/**
 * Server Schema
 * @private
 */
const serverSchema = new mongoose.Schema({
    name: {
      type: String,
      maxlength: 128,
      index: true,
      trim: true,
    },
    location: {
      type: String,
      maxlength: 4,
      minlength: 2,
      trim: true,
    },
    ipAddress: {
      type: String,
      maxlength: 15,
      minlength: 7,
      trim: true
    }
}, {
    timestamps: true,
});

/**
 * Statics
 */
serverSchema.statics = {
  /**
   * Get user
   *
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  async get(id) {
    try {
      let user;

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec();
      }
      if (user) {
        return user;
      }

      throw new APIError({
        message: 'User does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List servers in descending order of 'createdAt' timestamp.
   *
   * @returns {Promise<Server[]>}
   */
  list({
    name
  }) {
    const options = omitBy({ name }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .exec();
  },
};

/**
 * @typedef Server
 */
module.exports = mongoose.model('Server', serverSchema);