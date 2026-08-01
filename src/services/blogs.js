import axios from 'axios'
const baseUrl = '/api/blogs'

export const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
export const addBlog = async (token, title, author, url) => {
	try{
		const config = {
  	  headers: {Authorization: `Bearer ${token}`}
  	}
  	const newBlog = {
		  title:  title,
		  author: author,
		  url: url
  	}
  	const response = await axios.post(baseUrl, newBlog, config)
  	console.log("response data:")
  	console.log(response.data)
  	return response.data
	} catch (e) {
		console.log(e)
		return e
	}
}

export default {getAll}