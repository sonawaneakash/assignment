var express = require ('express');
var mysql = require ('mysql');
var bodyParser = require('body-parser');
var app = express();
var port = 8086;
app.use(bodyParser.json());

/*var con = mysql.createConnection({
	host : 'portcartdb.cs2mr6h6zv43.ap-south-1.rds.amazonaws.com',
	user : 'p0r1car1',
	password : 'pn3nu0x3Lk8uJr6Y',
	database : 'pcretailoperator'
});

con.connect((err)=>{
	if(err) {
		console.log(err);
	} else {
		console.log("connected");	
	}
})
app.get('/',(req, res)=>{
	var data = con.query('select * from tblRestaurantCuisine where id = 1',(err, data)=>{
		if(err){
			res.send(err);
		}else {
			res.send(data);
		}
	});
	
});
app.post('/postData',(req, res)=>{
	console.log("req---",req.body);
	var body = req.body;
	
		var indata = "INSERT INTO tblRestaurantCuisine SET ?";
		let myPromise = new Promise((resolve, reject)=>{
			var data = con.query(indata, body, function(err, results, fields){
				if(err){
					return resolve(err);
				} else{
					console.log("results--",results);
					return resolve(results);
				}
			});
		})
		myPromise.then((result)=>{
			res.json(result);
		})
	
});*/
router = express.Router();
var sampleRouter = require(__dirname +'/app/routes/sampleRoutes');
app.use('/simple', sampleRouter.router);
//app.use('/api', require('./app/routes/routes').router);

app.listen(port, console.log(`server is running on port ${port}`));




