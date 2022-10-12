var sampleController = require("../controllers/sampleController");

router.get("/signUp", sampleController.signUp);

module.exports.router = router;