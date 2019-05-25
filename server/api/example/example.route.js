const express = require("express");
const router = express.Router();
const exampleCtrl = require("./example.controller");
router.get("/test",exampleCtrl.test);
module.exports = router;

