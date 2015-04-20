module.exports = {

	db: {

		development: {
			url: {
				allPosts: "http://localhost:8000/api/v1/posts",
				onePost: "http://localhost:8000/api/v1/posts/",
				createPost: "http://localhost:8000/api/v1/posts",
				updatePostAuthor: "http://localhost:8000/api/v1/posts/author/",

				decodeUser: "http://localhost:8111/api/v1/decode",
				allUsers: "http://localhost:8111/api/v1/users",
				oneUser: "http://localhost:8111/api/v1/user/",
				signin: "http://localhost:8111/api/v1/signin"
			},
			secret: 'ammyreal'
		}

	},

	port: process.env.port || 8222

}