const Message = ({ message, isError }) => {
	if (message === null) {
		return (
			<>
			</>
		);
	}
	if (isError) {
		console.log('making an error');
		return (
			<div className="error">
				{message}
			</div>
		);
	}
	return (
		<div className="notification">
			{message}
		</div>
	);
};

export default Message;
