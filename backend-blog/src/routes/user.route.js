const express = require('express')
const { authJwt } = require("../middlewares");
const router = express.Router()
const controller = require("../controllers/user.controller");
  
router.get("/all", controller.allAccess);

module.exports = router;