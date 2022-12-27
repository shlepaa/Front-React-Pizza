import { screen } from '@testing-library/dom';
import setRender from '../../helpers/setRender';
import { IChosenPizza } from '../../interfaces/IChosenPizza';
import { CartButton } from './CartButton';

const chosenPizzas: IChosenPizza[] = [
	{
		dough: 'тонкое',
		title: 'Пицца',
		count: 1,
		size: '26',
		image: 'image',
		price: 100,
	},
	{
		dough: 'тонкое',
		title: 'Пицца',
		count: 2,
		size: '26',
		image: 'image',
		price: 100,
	},
];

describe('Displays pizzas count and total price that have chosen', () => {
	it('With empty pizzas', () => {
		setRender(<CartButton link={'/'} />, {
			pizzasReducer: {
				pizzas: [],
			},
		});
		const totalPriceElem = screen.getByTestId('total-price');
		const totalCountElem = screen.getByTestId('total-count');

		expect(totalPriceElem).toHaveTextContent('0');
		expect(totalCountElem).toHaveTextContent('0');
	});

	it('With filled pizzas', () => {
		setRender(<CartButton link={'/'} />, {
			pizzasReducer: {
				pizzas: chosenPizzas,
			},
		});
		const totalPriceElem = screen.getByTestId('total-price');
		const totalCountElem = screen.getByTestId('total-count');

		expect(totalPriceElem).toHaveTextContent('300');
		expect(totalCountElem).toHaveTextContent('3');
	});

	it('Link path', async () => {
		setRender(<CartButton link={'/test-path'} />, {
			pizzasReducer: {
				pizzas: chosenPizzas,
			},
		});
		const linkElem = screen.getByTestId('link');

		expect(linkElem).toHaveAttribute('href', '/test-path');
	});
});
