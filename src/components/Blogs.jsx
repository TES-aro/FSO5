import Blog from './Blog.jsx';

const Blogs = ({ user, blogs, setBlogs, setNotif }) => {
	if (!user){
		return(
			<>
			</>
		);
	}

	return(
		<>
			<h2>blogs</h2>
      	{blogs.map(blog =>
        	<Blog key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs} setNotif={setNotif} user={user} />
      	)}
		</>
	);
};

export default Blogs;
