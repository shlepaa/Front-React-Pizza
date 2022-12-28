import { Cart } from './Cart';
import setRender from '../../helpers/setRender';
import { IChosenPizza } from '../../interfaces/IChosenPizza';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

const chosenPizzas: IChosenPizza[] = [
	{
		count: 1,
		dough: 'тонкое',
		id: '1',
		image: 'image',
		price: 200,
		size: '26',
		title: 'Пицца',
	},
	{
		count: 2,
		dough: 'традиционное',
		id: '2',
		image: 'image',
		price: 100,
		size: '26',
		title: 'Пицца друггая',
	},
];

describe('Displays all chosen pizzas with their parameters', () => {
	it('Buttons performance', async () => {
		setRender(<Cart />, {
			pizzasReducer: { pizzas: chosenPizzas },
		});
		const positionElems = screen.getAllByTestId('position');
		const clearAllElem = screen.getByTestId('clear-all-button');
		const countPizzasElem = screen.getByTestId('amount-count');
		const amountPriceElem = screen.getByTestId('amount-price');

		expect(positionElems).toHaveLength(2);
		expect(countPizzasElem).toHaveTextContent('3');
		expect(amountPriceElem).toHaveTextContent('400');

		await userEvent.click(clearAllElem);
		expect(screen.queryAllByTestId('position')).toEqual([]);
	});
});
