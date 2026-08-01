import {useState} from 'react';
import {addBlog} from '../services/blogs.js';

const AddBlog = ({user, updateBlogs}) => {

	if (!user) {
		return (
			<>
			</>
		)
	}
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [url, setUrl] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault()
		const token = user.token;
		try{
			const newBlog = await addBlog(token, title, author, url)
			updateBlogs(newBlog)
		} catch(e) {
			//error handling goes here
		}

	}
	

	return (
		<>
			<h2> add a blog </h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						title
						<input
							type='text'
							value={title}
							onChange={({target}) => setTitle(target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						author
						<input
							type='text'
							value={author}
							onChange={({target}) => setAuthor(target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						url
						<input
							type='text'
							value={url}
							onChange={({target}) => setUrl(target.value)}
						/>
					</label>
				</div>
				<button type='submit'>add</button>
			</form>
		</>
	)
}

export default AddBlog
