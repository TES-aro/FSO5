import { render, screen } from '@testing-library/react';
import Blog from '../src/components/Blog.jsx';

const fakeBlog = {
	title: 'some title',
	author: 'author',
	likes: 0,
	url: 'http://url.com',
	addedBy: 'somebody'
};

test('renders content', () => {

	render(<Blog blog={fakeBlog} />);

	const urlElement = screen.getByText(fakeBlog.url);
	expect(urlElement).not.toBeVisible();
	const titleElement = screen.getByText('some title');
	const authorElement = screen.getByText('somebody');
	expect(titleElement).toBeDeVisible();
	expect(authorElement).toBeVisible();
});
