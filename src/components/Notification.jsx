import Message from './Message.jsx';
import {useEffect} from 'react';

const Notification = ({notification}) => {
	const error = false
	return(
		<>
			<Message className='notification' isError={error} message={Notification} />
		</>
	)

}

export default Notification
