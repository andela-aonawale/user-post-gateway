var request = require("request");
var jwt = require("jsonwebtoken");
var url = require("../../../config/config").db[process.env.NODE_ENV].url
var secret = require("../../../config/config").db[process.env.NODE_ENV].secret

module.exports = {

	// make request to get all posts from post API
	getAllPosts: function(req, res){
		request(url.allPosts, function(error, response, body){
			if(!error && response.statusCode == 200){
				res.send(JSON.parse(body));
			}
		});
	},

	// make request to get one post from post API
	getOnePost: function(req, res){
		request(url.onePost + req.params.id, function(error, response, body){
			if(!error && response.statusCode == 200){
				res.send(JSON.parse(body));
			}
		});
	},

	getAllUsers: function(req, res){
		request(url.allUsers, function(error, response, body){
			if(!error && response.statusCode == 200){
				res.send(JSON.parse(body));
			}
		});
	},

	getOneUser: function(req, res){
		request(url.oneUser + req.params.username, function(error, response, body){
			if(!error && response.statusCode == 200){
				res.send(JSON.parse(body));
			}
		});
	},

	// make request to create post to post API
	createPost: function(req, res){
		if(req.body.token){
			request.post({url:url.decodeUser, form:{token:req.body.token}}, function(err,httpResponse,body){
				if(err) res.json({message: "Invalid response from user service"});
				delete req.body.token;
				req.body.author = JSON.parse(httpResponse.body).username.username;
				request.post({url:url.createPost, form: req.body}, function(err,httpResponse,body){
					res.send(JSON.parse(body));
				});
			});
		}else{
			res.json({message: "Sign in / Create account to continue"});
		}
	},

	signInUser: function(req, res){
		request.post({url:url.signin, form: req.body}, function(err,httpResponse,body){
			res.send(JSON.parse(body));
		});
	},

	signOutUser: function(req, res){
		request.post({url:url.oneUser+req.params.username}, function(err,httpResponse,body){
			res.send(JSON.parse(body));
		});
	},

	deleteUser: function(req, res){
		request.del({url:url.oneUser+req.params.username}, function(err,httpResponse,body){
			res.send(JSON.parse(body));
			request.del({url:url.updatePostAuthor+req.params.username}, function(err,httpResponse,body){});
		});
	},

	deletePost: function(req, res){
		request.del({url:url.onePost+req.params.id}, function(err,httpResponse,body){
			res.send(JSON.parse(body));
		});
	},

	updateUser: function(req, res){
		request.put({url:url.oneUser+req.params.username, form: req.body}, function(err,httpResponse,body){
			res.send(JSON.parse(body)); 
			if(req.body.username){
				request.put({url:url.updatePostAuthor+req.params.username, form: req.body}, function(err,httpResponse,body){});
			}
		});
	}

}