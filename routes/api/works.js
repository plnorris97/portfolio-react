const router = require("express").Router();
const worksController = require("../../controller/worksController");

// Matches with "/api/works"
router.route("/")
  .get(worksController.findAll)
  // .post(activityController.create)

// Matches with "/api/activities/:name"
router
  .route("/:name")
  .get(worksController.findByName)
  // .put(activityController.update)

router
  .route("/works")
  .get(worksController.findAll)

module.exports = router;