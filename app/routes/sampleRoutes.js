var sampleController = require("../controllers/sampleController");

router.get("/menu", sampleController.display);

module.exports.router = router;