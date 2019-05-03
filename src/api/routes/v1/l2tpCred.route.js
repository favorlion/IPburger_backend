const express = require('express');
const controller = require('../../controllers/l2tpCred.controller');
const { authorize } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/users Get L2TP Cred
   * @apiDescription Get L2TP cred of current user
   * @apiVersion 1.0.0
   * @apiName GetL2TPCred
   * @apiGroup L2tpCred
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object} L2TP cred
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(authorize(), controller.get);

module.exports = router;