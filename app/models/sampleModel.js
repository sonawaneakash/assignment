var express = require ('express');
var mysql = require ('mysql');
var bodyParser = require('body-parser');
var app = express();
var port = 8086;
app.use(bodyParser.json());

var con = mysql.createConnection({
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
	//return new Promise((resolve, reject)=>{
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
	//})
});
app.get('/star',(req, res)=>{
	let n = 5;
	let string = "";
	// External loop
	for (let i = 1; i <= n; i++) {
	  // printing spaces
	  for (let j = 1; j <= n - i; j++) {
	    string += "&nbsp";
	  }
	  // printing star
	  for (let k = 0; k < i; k++) {
	    string += "*";
	  }
	  string += "<br>";
	}
	res.send(string);	
});

app.get('/simple',(req, res)=>{

/****************	palindrom Numbers*******************/
/*	function Palindrome()
	{
		var rem, temp, final = 0;
		var number = 121

		temp = number;
		while(number>0)
		{
			rem = number%10;
			console.log("rem = number%10--",rem);
			number = parseInt(number/10);
			console.log("number = parseInt(number/10)--",number);
			final = final*10+rem;
			console.log("final = final*10+rem--",final);
		}
		if(final==temp)
		{
			console.log("The inputed number is Palindrome");
		}
		else
		{
			console.log("The inputted number is not palindrome");
		}
	}
	Palindrome();*/

/****************factorial******************/
	/*function fact(n){
		var ans = 1;
		if(n == 0 || n ==1){
			return ans
		} else {
			for(var i=n;i>=1;i--){
				ans = ans*i;
			}
			return ans;
		}
	}

	var ans = fact(5);
	console.log("ans",ans);*/

/*****************fibbonaci******************
	function fact(n){
		var val1 = 0;
		var val2 = 1;
		var ans;
			for(var i=0;i<= n;i++){
				console.log(val1)
				ans = val1+val2;
				val1 = val2;
				val2 = ans;
			}
		
	}

	var ans = fact(5);
	//console.log("ans",ans);*/

/************************How many word (count)******************************/
/*let text = "we as are programmer and we have better in programing";
function countRepeatedWords(sentence) {
  let words = sentence.split(" ");
  let wordMap = {};
  console.log("wordMap",wordMap)
  for (let i = 0; i < words.length; i++) {
  	console.log("words[i]",words[i])
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  return wordMap;
}

console.log(countRepeatedWords(text));*/
/***************inter view quition************************/
/*	var Obj1 = {
	    firstName: "A",
	    lastName: "A1",
	    childs: [
	        {
	            firstName: "B1",
	            lastName: "B2",
	            childs: [
	            ]
	        },
	        {
	            firstName: "C1",
	            lastName: "C2",
	            childs: [
	            ]
	        }
	    ]
	}
var labelsParent = Obj1.firstName + " " + Obj1.lastName;
delete Obj1;
var result = Obj1.childs.map(function(item) {
    return {
        label: item.firstName + ' ' + item.lastName,
        childs: item.childs
    };
});
Obj1 = Object.assign({label : labelsParent},{items : result});
console.log('Obj1====',Obj1);*/
	const numbers1 = [45, 4, 9, 0, 25];
	const numbers2 = numbers1.map(myFunction);

	console.log(typeof numbers2);

	function myFunction(value, index, array) {
	  return value * 2;
	}


});

app.listen(port, console.log(`server is running on port ${port}`));




