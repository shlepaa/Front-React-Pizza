import { NotFound } from './NotFound';
import setRender from '../../helpers/setRender';
import { screen } from '@testing-library/dom';

describe('Table with all sizes for current pizza', () => {
	it('With filled sizes', async () => {
		setRender(<NotFound />);
		const linkElem = screen.getByTestId('link');
		const notFoundElem = screen.getByTestId('not-found');

		expect(notFoundElem).toMatchSnapshot();
		expect(linkElem).toHaveAttribute('href', '/');
	});
});
