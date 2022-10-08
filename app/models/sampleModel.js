var conn = require("../../config/db");

exports.getMeals = (req, res) => {
  return new Promise((resolve, reject) => {
    let sqlQuery = "SELECT * FROM dbname.tablename ";
   let query = conn.query(sqlQuery, (err, results) => {
    console.log("results",results);
      if(results.length > 0) {
        console.log("line no.20--",results);
        return resolve(results);
      } else {
        return resolve("failure");
      }
    });
  });
}