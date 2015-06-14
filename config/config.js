module.exports = {

	db: {

		development: {
			url: {
				allPosts: "http://localhost:8000/api/v1/posts",
				onePost: "http://localhost:8000/api/v1/post/",
				createPost: "http://localhost:8000/api/v1/newpost",
				updatePostAuthor: "http://localhost:8000/api/v1/posts/author/",

				decodeUser: "http://localhost:8111/api/v1/decode",
				allUsers: "http://localhost:8111/api/v1/users",
				oneUser: "http://localhost:8111/api/v1/user/",
				signin: "http://localhost:8111/api/v1/signin",
				signup: "http://localhost:8111/api/v1/signup"
			},
			secret: 'ammyreal'
		},

		test: {
			url: {
				allPosts: "http://localhost:8000/api/v1/posts",
				onePost: "http://localhost:8000/api/v1/post/",
				createPost: "http://localhost:8000/api/v1/newpost",
				updatePostAuthor: "http://localhost:8000/api/v1/posts/author/",

				decodeUser: "http://localhost:8111/api/v1/decode",
				allUsers: "http://localhost:8111/api/v1/users",
				oneUser: "http://localhost:8111/api/v1/user/",
				signin: "http://localhost:8111/api/v1/signin",
				signup: "http://localhost:8111/api/v1/signup"
			},
			secret: 'ammyreal'
		},

		production: {
			url: {
				allPosts: "https://post-service.herokuapp.com/api/v1/posts",
				onePost: "https://post-service.herokuapp.com/api/v1/post/",
				createPost: "https://post-service.herokuapp.com/api/v1/newpost",
				updatePostAuthor: "https://post-service.herokuapp.com/api/v1/posts/author/",

				decodeUser: "https://user-crud-service.herokuapp.com/api/v1/decode",
				allUsers: "https://user-crud-service.herokuapp.com/api/v1/users",
				oneUser: "https://user-crud-service.herokuapp.com/api/v1/user/",
				signin: "https://user-crud-service.herokuapp.com/api/v1/signin",
				signup: "https://user-crud-service.herokuapp.com/api/v1/signup"
			},
			secret: '@ammyreal'
		}

	},

	port: process.env.PORT || 8222,

	corsOptions: {
  	origin: 'http://localhost:8333',
  	methods: ['GET', 'PUT', 'POST', 'DELETE'],
  	allowedHeaders: ['Content-Type', 'Authorization']
	}

}