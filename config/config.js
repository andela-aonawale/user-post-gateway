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
				allPosts: "https://secure-escarpment-1698.herokuapp.com/api/v1/posts",
				onePost: "https://secure-escarpment-1698.herokuapp.com/api/v1/post/",
				createPost: "https://secure-escarpment-1698.herokuapp.com/api/v1/newpost",
				updatePostAuthor: "https://secure-escarpment-1698.herokuapp.com/api/v1/posts/author/",

				decodeUser: "https://whispering-inlet-1798.herokuapp.com/api/v1/decode",
				allUsers: "https://whispering-inlet-1798.herokuapp.com/api/v1/users",
				oneUser: "https://whispering-inlet-1798.herokuapp.com/api/v1/user/",
				signin: "https://whispering-inlet-1798.herokuapp.com/api/v1/signin",
				signup: "https://whispering-inlet-1798.herokuapp.com/api/v1/signup"
			},
			secret: '@ammyreal'
		}

	},

	port: process.env.port || 8222

}