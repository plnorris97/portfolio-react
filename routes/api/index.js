
const router = require("express").Router();
const workRoutes = require('./works');

// Activity routes
router.use("/works", workRoutes);

module.exports = router;