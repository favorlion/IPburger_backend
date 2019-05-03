const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../utils/APIError');

/**
 * L2TP cred Schema
 * @private
 */
const l2tpCredSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128,
    },
}, {
    timestamps: true,
});

/**
 * Methods
 */
l2tpCredSchema.method({
    transform() {
      const transformed = {};
      const fields = ['name', 'password'];
  
      fields.forEach((field) => {
        transformed[field] = this[field];
      });
  
      return transformed;
    },
});

/**
 * Statics
 */
l2tpCredSchema.statics = {
  /**
   * Get cred
   * @param {ObjectId} userId - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  async get(userId) {
    try {
      let cred;

      if (mongoose.Types.ObjectId.isValid(userId)) {
        cred = await this.findOne({userId: userId}).exec();
      }
      if (cred) {
        return cred;
      }

      throw new APIError({
        message: 'Cred does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },
};

/**
 * @typedef L2tpCred
 */
module.exports = mongoose.model('L2tpCred', l2tpCredSchema);