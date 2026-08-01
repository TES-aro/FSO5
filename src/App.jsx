import { useState, useEffect } from 'react'
import Blogs from './components/Blogs.jsx'
import blogService from './services/blogs'
import Login from './components/Login.jsx';
import User from './components/User.jsx';
import AddBlog from './components/AddBlog.jsx'
import {TestButton} from './components/TestButton.jsx'
import Notification from './components/Notification.jsx'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState()

	const [notification, setNotification] = useState(null)
	const addNotification = (text) => {
		console.log(`new notification: ${text}`)
		setNotification(text)
		console.log(`notification: ${notification}`)
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
	  setUser(JSON.parse(window.localStorage.getItem('loggedNoteappUser')))
  }, [])

  return (
    <div>
    	<Notification notification={notification} />
    	<User user={user} setUser={setUser} />
    	<Login user={user} setUser={setUser} />
    	<TestButton addNotification={addNotification} />
    	<AddBlog user={user} updateBlogs={updateBlogs} />
    	<Blogs user={user} blogs={blogs} />
    </div>
  )
}

export default App