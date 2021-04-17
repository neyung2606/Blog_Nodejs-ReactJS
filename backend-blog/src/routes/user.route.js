const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
const authJwt = require("../middlewares/authJwt");

router.get("/", [authJwt.verifyToken], controller.getAllUser);
router.get("/:id", [authJwt.verifyToken], controller.findUser);
router.put("/:id", [authJwt.verifyToken], controller.updateUser);
router.put("/delete/:id", [authJwt.verifyToken], controller.deleteUser);

module.exports = router;
