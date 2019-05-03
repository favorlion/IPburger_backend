const express = require('express');
const controller = require('../../controllers/server.controller');
const { authorize } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/users List Servers
   * @apiDescription Get a list of Servers
   * @apiVersion 1.0.0
   * @apiName ListServers
   * @apiGroup Server
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess {Object[]} users List of servers.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(authorize(), controller.list);

module.exports = router;