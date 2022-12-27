import setRender from '../../helpers/setRender';
import { Header } from './Header';
import { screen } from '@testing-library/dom';

describe('Header', () => {
	it('Link path', async () => {
		setRender(<Header />);
		const linkElem = screen.getByTestId('header-link');
		const cartButtonElem = screen.getByTestId(/cart-button-header/i);

		expect(linkElem).toHaveAttribute('href', '/');
		expect(cartButtonElem).toHaveAttribute('href', '/cart');
	});
});
