var gateway = require("../controllers/gateway.controller");

module.exports = function(router){
	router.route("/newpost").post(gateway.createPost);
	router.route("/posts").get(gateway.getAllPosts);
	router.route("/post/:id")
	.get(gateway.getOnePost)
	.put(gateway.updatePost)
	.delete(gateway.deletePost);

	router.route("/users").get(gateway.getAllUsers);
	router.route("/user/:username")
	.post(gateway.signOutUser)
	.delete(gateway.deleteUser)
	.put(gateway.updateUser)
	.get(gateway.getOneUser);

	router.route("/signin").post(gateway.signIn);
	router.route("/signup").post(gateway.signUp);
}