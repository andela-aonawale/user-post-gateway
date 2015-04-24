var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var routes = require("../app/gateway/routes");
var corsOptions = require("./config").corsOptions;

module.exports = function(){
	var app = express();
	var router = express.Router();

	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	app.use("/api/v1", router);

	app.use('*', cors(corsOptions));
	
	routes(router);

	return app;
};