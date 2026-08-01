import { useState, useEffect } from 'react'
import Blogs from './components/Blogs.jsx'
import blogService from './services/blogs'
import Login from './components/Login.jsx';
import User from './components/User.jsx';
import AddBlog from './components/AddBlog.jsx'
import {TestButton} from './components/TestButton.jsx'
import Message from './components/Message.jsx'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

	const [notif, setNotification] = useState(null)
	const [err, setErr] = useState(null)
	const addNotification = (text) => {
		console.log(`new notification: ${text}`)
		const newNotif = text
		setNotification(newNotif)
		setTimeout(() => {
			setNotification(null)
		}, 5000)
	}
  const updateBlogs = (blog) => {
	  console.log("in updateBlogs function")
	  setBlogs([...blogs, blog])
  }

  useEffect(() => {
	  console.log("a new blog has been added!")
  }, [blogs])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
	  const windowUser = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))
	  console.log(`windowUser: ${windowUser}`)
  }, [])

  return (
    <div>
    	<Message isError='false' message={notif} />
    	<Message isError='true' message={err} />
    	<User user={user} setUser={setUser} />
    	<Login user={user} setUser={setUser} />
    	<TestButton addNotification={addNotification} />
    	<AddBlog user={user} updateBlogs={updateBlogs} />
    	<Blogs user={user} blogs={blogs} />
    </div>
  )
}

export default App