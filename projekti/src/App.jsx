import { useState, useEffect, useRef } from 'react';
import Blogs from './components/Blogs.jsx';
import blogService from './services/blogs';
import Login from './components/Login.jsx';
import User from './components/User.jsx';
import AddBlog from './components/AddBlog.jsx';
import Message from './components/Message.jsx';
import Toggle from './components/Toggle.jsx';

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [user, setUser] = useState(null);
	const blogRef = useRef();

	const [notif, setNotification] = useState(null);
	const [err, setError] = useState(null);
	const setErr = (text) => {
		setError(text);
		setTimeout(() => {
			setError(null);
		}, 5000);
	};
	const addNotification = (text) => {
		console.log(`new notification: ${text}`);
		const newNotif = text;
		setNotification(newNotif);
		setTimeout(() => {
			setNotification(null);
		}, 5000);
	};

	const setNotif = (text, error) => {
		if (!error) {
			return addNotification(text);
		}
		setErr(text);
	};

	const updateBlogs = (blog) => {
	  console.log('in updateBlogs function');
	  setBlogs([...blogs, blog]);
	};

	const visRef = useRef();

	useEffect(() => {
		blogService.getAll().then(blogs => {
	    const sortedBlogs = blogs.toSorted((a,b) => {
		    return b.likes - a.likes;
	    });
			setBlogs( sortedBlogs );
		});
	}, []);

	useEffect(() => {
	  setUser(JSON.parse(window.localStorage.getItem('loggedNoteappUser')));
	}, []);

	return (
		<div>
    	<Message isError='false' message={notif} />
    	<Message isError='true' message={err} />
    	<User user={user} setUser={setUser} />
    	<Login user={user} setUser={setUser} setError={setErr} />
    	<Toggle buttonLabel="Add Blog" ref={visRef}>
    		<AddBlog user={user} updateBlogs={updateBlogs} setError={setErr} ref={blogRef}
    		 visible={visRef}/>
    	</Toggle>
    	<Blogs setNotif={setNotif} user={user} blogs={blogs} setBlogs={setBlogs}/>
		</div>
	);
};

export default App;