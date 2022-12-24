import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Sort } from './Sort';
import userEvent from '@testing-library/user-event';

describe('Sort', () => {
	it('Popup opening', async () => {
		render(
			<Provider store={store}>
				<Sort
					sortParams={[
						{ param: 'rating', title: 'популярности' },
						{ param: 'currentPrice', title: 'цене' },
						{ param: 'title', title: 'алфавиту' },
					]}
				/>
			</Provider>
		);
		const buttonElem = screen.getByTestId('sorting-button');
		expect(buttonElem).toBeInTheDocument();
		expect(screen.getByTestId('popup')).not.toHaveClass('popupActive');

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).toHaveClass('popupActive');
	});
});
