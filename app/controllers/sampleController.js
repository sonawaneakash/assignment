var sampleModel = require("../models/sampleModel");
exports.signUp = (req, res) => {
   console.log("req.query--controller--",req.query.id);
   const meals = sampleModel.getMeals(req, res);
   meals.then(function(mealsData) {
    //console.log("controller--",mealsData);
    res.json(mealsData);
  })

  
  //res.send("hello world");
};  




