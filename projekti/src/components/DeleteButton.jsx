import { delBlog } from '../services/blogs.js';

const Delete = ({ blog, user, blogs, setBlogs, setNotif }) => {
	if (!user || user.username !== blog.addedBy) {
		return (
			<>
			</>
		);
	}
	const handleDel = async () => {
		try {
			if (!window.confirm(`delete blogpost "${blog.title}"?`)){
				return;
			}
			console.log('blog to be deleted:');
			console.log(blog);
			const id = blog.id;
			 await delBlog(user.token, id);
			setBlogs(blogs.filter(blog => blog.id !== id));
			setNotif(`deleted blog ${blog.title}`, false);
		} catch(e) {
			setNotif(`issue deleting blog ${blog.name}. ${e.error}`, true);
			console.log(e);
		}
	};
	return (
		<>
			<button onClick={handleDel}> delete </button>
		</>
	);
};

export default Delete;
