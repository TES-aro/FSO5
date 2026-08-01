import Toggle from './Toggle.jsx';
import Like from './Like.jsx';
import Delete from './DeleteButton.jsx';

const Blog = ({ blog, blogs, setBlogs, setNotif, user }) => {
	const blogStyle = {
		paddingTop: 10,
		paddingLeft: 2,
		border: 'solid',
		borderWidth: 1,
		marginBottom: 5
	};

	return (
  	<div style={blogStyle}>
  	  {blog.title} by {blog.author}
  	  <Toggle buttonLabel="show more" cancelLabel='show less'>
  	  	{blog.likes} likes
  	  	<Like blog={blog} blogs={blogs} setBlogs={setBlogs} setNotif={setNotif}/>
  	  	<br/>
				<a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a>
				<br />
				added by {blog.addedBy}
				<Delete blog={blog} user={user} blogs={blogs} setBlogs={setBlogs} setNotif={setNotif}/>
				<br />
			</Toggle>
  	</div>
	);
};

export default Blog;