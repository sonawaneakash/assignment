var sampleModel = require("../models/sampleModel");
exports.display = (req, res) => {
   const meals = sampleModel.getMeals();
   meals.then(function(mealsData) {
    console.log("controller--",mealsData);
    res.json(mealsData);
  })
  //res.send("hello world");
};  




