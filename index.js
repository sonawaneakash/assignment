var express = require ('express');
var mysql = require ('mysql');
var bodyParser = require('body-parser');
var app = express();
var port = 8086;
app.use(bodyParser.json());


router = express.Router();
var sampleRouter = require(__dirname +'/app/routes/sampleRoutes');
app.use('/simple', sampleRouter.router);

app.listen(port, console.log(`server is running on port ${port}`));




