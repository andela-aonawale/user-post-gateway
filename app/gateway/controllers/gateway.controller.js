var request = require("request");
var url = require("../../../config/config").db[process.env.NODE_ENV].url
var secret = require("../../../config/config").db[process.env.NODE_ENV].secret

var validate = function(req, res, callBack){
	request.post({url:url.decodeUser, form:{token:req.headers.token}}, callBack);
}

var makeRequest = function(req, res, url, method, callBack){
	if(method === "get") request(url, callBack);
	if(method === "post") request.post({url:url, form: req.body}, callBack);
	if(method === "put") request.put({url:url, form: req.body}, callBack);
	if(method === "delete") request.del({url:url, form: req.body}, callBack);
}

module.exports = {

	// make request to get all posts from post API
	getAllPosts: function(req, res){
		makeRequest(req, res, url.allPosts, "get", function(error, response, body){
			res.send(JSON.parse(body));
		});
	},

	// make request to get one post from post API
	getOnePost: function(req, res){
		makeRequest(req, res, url.onePost+req.params.id, "get", function(error, response, body){
			res.send(JSON.parse(body));
		});
	},

	// make request to get all users from user API
	getAllUsers: function(req, res){
		makeRequest(req, res, url.allUsers, "get", function(error, response, body){
			res.send(JSON.parse(body));
		});
	},

	// make request to get one user from user API
	getOneUser: function(req, res){
		makeRequest(req, res, url.oneUser+req.params.username, "get", function(error, response, body){
				res.send(JSON.parse(body));
		});
	},

	// make request to create new post to post API
	createPost: function(req, res){
		if(req.headers.token){
			validate(req, res, function(err,httpResponse,body){
				if(JSON.parse(body).username){
					req.body.author = JSON.parse(httpResponse.body).username.username;
					makeRequest(req, res, url.createPost, "post", function(err,httpResponse,body){
						res.send(JSON.parse(body));
					});
				}else{
					res.json({message: "Invalid token"});
				}
			});
		}else{
			res.json({message: "Signin / Signup to continue"});
		}
	},

	// make signin request to user API
	signIn: function(req, res){
		makeRequest(req, res, url.signin, "post", function(err,httpResponse,body){
			res.send(JSON.parse(body));
		});
	},

	// make signout request to user API
	signOutUser: function(req, res){
		if(req.headers.token){
			validate(req, res, function(err,httpResponse,body){
				if(JSON.parse(body).username){
					var username = JSON.parse(httpResponse.body).username.username;
					makeRequest(req, res, url.oneUser+username, "post", function(err,httpResponse,body){
						res.send(JSON.parse(body));
					});
				}else{
					res.json({message: "Invalid token"});
				}
			});
		}else{
			res.json({message: "Signin / Signup to continue"});
		}
	},

	// make delete user request to user API
	deleteUser: function(req, res){
		if(req.headers.token){
			validate(req, res, function(err,httpResponse,body){
				if(JSON.parse(body).username){
					var username = JSON.parse(body).username.username;
					makeRequest(req, res, url.oneUser+username, "delete", function(err,httpResponse,body){
						res.send(JSON.parse(body));
						request.del({url:url.updatePostAuthor+username}, function(err,httpResponse,body){});
					});
				}else{
					res.json({message: "Invalid token"});
				}
			});
		}else{
			res.json({message: "Signin / Signup to continue"});
		}
	},

	// make delete post request to post API
	deletePost: function(req, res){
		if(req.headers.token){
			validate(req, res, function(err,httpResponse,body){
				if(JSON.parse(body).username){
					var username = JSON.parse(body).username.username;
					makeRequest(req, res, url.onePost+req.params.id, "get", function(err,httpResponse,body){
						if(username === JSON.parse(body).author){
							makeRequest(req, res, url.onePost+req.params.id, "delete", function(err,httpResponse,body){
								res.send(JSON.parse(body));
							});
						}else{
							res.json({message: "You are not allowed to do this"});
						}
					});
				}else{
					res.json({message: "Invalid token"});
				}
			});
		}else{
			res.json({message: "Signin / Signup to continue"});
		}
	},

	// make update user request to user API
	updateUser: function(req, res){
		if(req.headers.token){
			validate(req, res, function(err,httpResponse,body){
				if(JSON.parse(body).username){
					var username = JSON.parse(body).username.username;
					makeRequest(req, res, url.oneUser+req.params.username, "put", function(err,httpResponse,body){
						res.send(JSON.parse(body));
						if(req.body.username){
							request.put({url:url.updatePostAuthor+req.params.username, form: req.body}, function(err,httpResponse,body){});
						}
					});
				}else{
					res.json({message: "Invalid token"});
				}
			});
		}else{
			res.json({message: "Signin / Signup to continue"});
		}
	},

	// make update post request to post API
	updatePost: function(req, res){
		if(req.headers.token){
			validate(req, res, function(err,httpResponse,body){
				if(JSON.parse(body).username){
					var username = JSON.parse(body).username.username;
					makeRequest(req, res, url.onePost+req.params.id, "get", function(err,httpResponse,body){
						if(username === JSON.parse(body).author){
							makeRequest(req, res, url.onePost+req.params.id, "put", function(err,httpResponse,body){
								res.send(JSON.parse(body));
							});
						}else{
							res.json({message: "You are not allowed to do this"});
						}
					});
				}else{
					res.json({message: "Invalid token"});
				}
			});
		}else{
			res.json({message: "Signin / Signup to continue"});
		}
	},

	// make signup request to user API
	signUp: function(req, res){
		request.post({url:url.signup, form: req.body}, function(err,httpResponse,body){
			res.send(JSON.parse(body));
		});
	}

}