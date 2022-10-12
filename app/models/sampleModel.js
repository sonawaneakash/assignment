var conn = require("../../config/db");

exports.getMeals = (req, res) => {
  return new Promise((resolve, reject) => {
    //console.log("id",req.query);
    var id = req.query.id;
    let sqlQuery = "SELECT * FROM pcretailoperator.tblRetailOperators WHERE id = ?";
   let query = conn.query(sqlQuery, id, (err, results) => {
    //console.log("results",results.length);
      if(results.length > 0) {
        console.log("line no.20--",results);
        return resolve(results);
      } else {
        return resolve("failure");
      }
    });
  });
}