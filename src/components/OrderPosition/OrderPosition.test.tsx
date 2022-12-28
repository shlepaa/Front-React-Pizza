import { OrderPosition } from './OrderPosition';
import setRender from '../../helpers/setRender';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { IChosenPizza } from '../../interfaces/IChosenPizza';

const chosenPizza = {
	dough: 'тонкое',
	title: 'Пицца',
	count: 1,
	size: '26',
	image: 'image',
	price: 100,
	id: '1',
};

const defaultPizzas: IChosenPizza[] = [
	{
		dough: 'тонкое',
		title: 'Пицца',
		count: 1,
		size: '26',
		image: 'image',
		price: 100,
		id: '1',
	},
];

describe('Displays pizza with params that have been chosen', () => {
	it('Performance buttons', async () => {
		setRender(<OrderPosition {...chosenPizza} />, {
			pizzasReducer: {
				pizzas: defaultPizzas,
			},
		});
		const plusButton = screen.getByTestId('plus-button');
		const countElem = screen.getByTestId('count');
		const priceElem = screen.getByTestId('price');
		const paramsElem = screen.getByTestId('params');
		const minusButton = screen.getByTestId('minus-button');
		const clearButton = screen.getByTestId('clear-button');

		expect(paramsElem).toHaveTextContent(/тонкое тесто, 26/i);
		expect(countElem).toHaveTextContent('1');
		expect(priceElem).toHaveTextContent('100');

		await userEvent.click(plusButton);
		expect(countElem).toHaveTextContent('2');
		expect(priceElem).toHaveTextContent('200');

		await userEvent.click(minusButton);
		expect(countElem).toHaveTextContent('1');
		expect(priceElem).toHaveTextContent('100');

		await userEvent.click(clearButton);
		expect(
			screen.queryByTestId('position-wrapper')
		).not.toBeInTheDocument();
	});

	it('Minus button', async () => {
		setRender(<OrderPosition {...chosenPizza} />, {
			pizzasReducer: {
				pizzas: defaultPizzas,
			},
		});
		const countElem = screen.getByTestId('count');
		const minusButton = screen.getByTestId('minus-button');

		expect(countElem).toHaveTextContent('1');

		await userEvent.click(minusButton);
		expect(
			screen.queryByTestId('position-wrapper')
		).not.toBeInTheDocument();
	});

	afterEach(() => {
		localStorage.clear();
	});
});
