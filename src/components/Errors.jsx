import Message from './Message.jsx';

const Errors = ({notifications}) => {
	return(
		<>
			{notifications.map((notification, index) => {
				const key = "map"+index
				const error = true
				return(
					<Message key={key} isError={error}, message={notification} />
				)
			})}
		</>
	)

}

export default Errors
import Message from './Message.jsx';
import {useEffect} from 'react';

const Notifications = ({notifications}) => {
	//for some reason it errors out on the first notification?
	return(
		<div className='notification'>
			{notifications.map((notification, index) => {
				const key = "map"+index
				console.log(`new key: ${key}`)
				const error = false
				const message = notification + key
				return(
					<>
						<Message className='notification' key={key} isError={error} message={message} />
					</>
				)
			})}
		</div>
	)

}

export default Notifications
