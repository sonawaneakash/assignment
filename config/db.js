var conn ={

  host: 'portcartdb.cs2mr6h6zv43.ap-south-1.rds.amazonaws.com',

  user: 'p0r1car1', /* MySQL User */

  password: 'pn3nu0x3Lk8uJr6Y', /* MySQL Password */

  database: 'pcretailoperator' /* MySQL Database */

};
var mysql =  require('mysql');
const connection = mysql.createConnection({
  host: conn.host,
  user: conn.user,
  password: conn.password,
  database: conn.datbase 
});
 
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;





