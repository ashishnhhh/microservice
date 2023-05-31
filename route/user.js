const express = require("express");
const router = express.Router();

const{getuser} = require("../controller/user");

router.route("/").get(getuser);


module.exports = router;