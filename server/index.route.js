const express = require('express');
const router = express.Router();
const exampleRoutes = require('./api/example/example.route');
router.use("/example",exampleRoutes);
module.exports= router;