import setRender from '../../helpers/setRender';
import { Categories } from './Categories';
import { initialState } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('Displayes all types according to pizzas from backend', () => {
	it('Performance with default "все" state and empty search value', async () => {
		setRender(<Categories />, {
			pizzaSortReducer: {
				...initialState,
				allPizzaTypes: ['мясная', 'сырная'],
				currentType: 'все',
				searchValue: '',
			},
		});
		const allButton = screen.getByTestId('all-button');
		const typeButtons = screen.getAllByTestId('type-button');
		expect(allButton).toHaveClass('active');
		expect(typeButtons).toHaveLength(2);

		typeButtons[0] && (await userEvent.click(typeButtons[0]));
		expect(allButton).not.toHaveClass('active');
		expect(typeButtons[0]).toHaveClass('active');

		typeButtons[1] && (await userEvent.click(typeButtons[1]));
		expect(allButton).not.toHaveClass('active');
		expect(typeButtons[1]).toHaveClass('active');
	});

	it('With other default state', async () => {
		setRender(<Categories />, {
			pizzaSortReducer: {
				...initialState,
				allPizzaTypes: ['мясная', 'сырная'],
				currentType: 'мясная',
				searchValue: '',
			},
		});
		const allButton = screen.getByTestId('all-button');
		const typeButtons = screen.getAllByTestId('type-button');
		expect(allButton).not.toHaveClass('active');
		expect(typeButtons).toHaveLength(2);
		expect(typeButtons[0]).toHaveClass('active');

		await userEvent.click(allButton);
		expect(allButton).toHaveClass('active');
		expect(typeButtons[0]).not.toHaveClass('active');
	});

	it('With search value', async () => {
		setRender(<Categories />, {
			pizzaSortReducer: {
				...initialState,
				allPizzaTypes: ['мясная', 'сырная'],
				currentType: 'все',
				searchValue: 'test text',
			},
		});
		const allButton = screen.getByTestId('all-button');
		const typeButtons = screen.getAllByTestId('type-button');
		expect(allButton).not.toHaveClass('active');
		expect(typeButtons).toHaveLength(2);
		expect(typeButtons[0]).not.toHaveClass('active');

		await userEvent.click(allButton);
		expect(allButton).toHaveClass('active');
	});
});
