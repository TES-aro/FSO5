import Blog from './Blog.jsx'

const Blogs = ({user, blogs}) => {
	if (!user){
		return(
			<>
			</>
		)
	}

	return(
		<>
			<h2>blogs</h2>
      	{blogs.map(blog =>
        	<Blog key={blog.id} blog={blog} />
      	)}
    </>
	)
}

export default Blogs
