import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import setRender from '../../../helpers/setRender';
import { initialState } from '../../../store/slices/PizzaSortSlice/PizzaSortSlice';
import { PizzaBlock } from '../PizzaBlock';
import { PizzaBlockProps } from '../PizzaBlock.props';
import {
	changedSizeAndDoughPizzas,
	changedSizePizzas,
	chosenPizzas,
	defaultPizzas,
	differentSizeAndDoughChosenPizzas,
	oneMoreChosenPizzas,
} from './pizzas';

export const pizzaBlockProps: PizzaBlockProps = {
	title: 'Пицца',
	image: 'http://google/image',
	possibleDoughs: ['тонкое', 'традиционное', 'без теста'],
	sizesAndPrices: [
		{
			size: '26',
			price: 100,
		},
		{
			size: '30',
			price: 200,
		},
	],
	defaultDough: 'тонкое',
	defaultSize: '26',
	_id: '1',
	rating: 1,
};

describe('Displays block with information about current pizza', () => {
	beforeEach(() => {
		localStorage.clear();
	});
	it('Sizes and doughs count', async () => {
		setRender(<PizzaBlock {...pizzaBlockProps} />);
		const sizeButtonElems = screen.getAllByTestId('size-button');
		const doughButtonElems = screen.getAllByTestId('dough-button');

		expect(sizeButtonElems).toHaveLength(2);
		expect(doughButtonElems).toHaveLength(3);
	});

	it('Swapping size and doughs', async () => {
		setRender(<PizzaBlock {...pizzaBlockProps} />, {
			pizzaSortReducer: {
				...initialState,
				pizzas: defaultPizzas,
			},
		});
		const sizeButtonElems = screen.getAllByTestId('size-button');
		const doughButtonElems = screen.getAllByTestId('dough-button');

		expect(sizeButtonElems[0]).toHaveClass('active');
		expect(doughButtonElems[0]).toHaveClass('active');
		expect(localStorage.pizzas).toBeUndefined();

		sizeButtonElems[1] && (await userEvent.click(sizeButtonElems[1]));
		expect(sizeButtonElems[1]).toHaveClass('active');
		expect(sizeButtonElems[0]).not.toHaveClass('active');
		expect(sizeButtonElems[1]).toHaveTextContent('30');
		expect(JSON.parse(localStorage.pizzas)).toStrictEqual(
			changedSizePizzas
		);

		doughButtonElems[1] && (await userEvent.click(doughButtonElems[1]));
		expect(doughButtonElems[1]).toHaveClass('active');
		expect(doughButtonElems[0]).not.toHaveClass('active');
		expect(doughButtonElems[1]).toHaveTextContent('традиционное');
		expect(JSON.parse(localStorage.pizzas)).toStrictEqual(
			changedSizeAndDoughPizzas
		);
	});

	it('Output price', async () => {
		setRender(<PizzaBlock {...pizzaBlockProps} />);
		const priceElem = screen.getByTestId('price');
		const plusButtonElem = screen.getByTestId('plus');
		const minusButtonElem = screen.getByTestId('minus');
		const sizeButtonElems = screen.getAllByTestId('size-button');

		expect(priceElem).toHaveTextContent(/100/);

		await userEvent.click(plusButtonElem);
		expect(priceElem).toHaveTextContent(/200/);

		await userEvent.click(minusButtonElem);
		await userEvent.click(minusButtonElem);
		expect(priceElem).toHaveTextContent(/100/);

		sizeButtonElems[1] && (await userEvent.click(sizeButtonElems[1]));
		expect(priceElem).toHaveTextContent(/200/);

		await userEvent.click(plusButtonElem);
		expect(priceElem).toHaveTextContent(/400/);

		sizeButtonElems[0] && (await userEvent.click(sizeButtonElems[0]));
		expect(priceElem).toHaveTextContent(/200/);
	});

	it('Output count', async () => {
		setRender(<PizzaBlock {...pizzaBlockProps} />);
		const plusButtonElem = screen.getByTestId('plus');
		const minusButtonElem = screen.getByTestId('minus');
		const countElem = screen.getByTestId('count');
		const amountElem = screen.getByTestId('amount-cost');

		expect(countElem).toHaveTextContent('1');
		expect(amountElem).not.toHaveClass('visibleAmount');

		await userEvent.click(plusButtonElem);
		expect(countElem).toHaveTextContent('2');
		expect(amountElem).toHaveClass('visibleAmount');

		await userEvent.click(minusButtonElem);
		await userEvent.click(minusButtonElem);
		expect(countElem).toHaveTextContent('1');
		expect(amountElem).not.toHaveClass('visibleAmount');
	});

	it('Adding pizza into the storage to show in cart page', async () => {
		setRender(<PizzaBlock {...pizzaBlockProps} />, {
			pizzaSortReducer: {
				...initialState,
				pizzas: defaultPizzas,
			},
		});
		const sizeButtonElems = screen.getAllByTestId('size-button');
		const doughButtonElems = screen.getAllByTestId('dough-button');
		const plusButtonElem = screen.getByTestId('plus');
		const addButtonElem = screen.getByTestId('add-button');
		const countElem = screen.getByTestId('count');

		expect(sizeButtonElems[0]).toHaveClass('active');
		expect(localStorage.chosenPizzas).toBeUndefined();

		sizeButtonElems[1] && (await userEvent.click(sizeButtonElems[1]));
		expect(sizeButtonElems[1]).toHaveClass('active');
		expect(sizeButtonElems[1]).toHaveTextContent('30');

		doughButtonElems[1] && (await userEvent.click(doughButtonElems[1]));
		expect(doughButtonElems[1]).toHaveClass('active');
		expect(doughButtonElems[1]).toHaveTextContent('традиционное');

		await userEvent.click(plusButtonElem);
		expect(countElem).toHaveTextContent('2');

		await userEvent.click(addButtonElem);
		expect(JSON.parse(localStorage.chosenPizzas)).toStrictEqual(
			chosenPizzas
		);
		expect(countElem).toHaveTextContent('1');

		await userEvent.click(addButtonElem);
		expect(JSON.parse(localStorage.chosenPizzas)).toStrictEqual(
			oneMoreChosenPizzas
		);

		doughButtonElems[0] && (await userEvent.click(doughButtonElems[0]));
		expect(doughButtonElems[0]).toHaveTextContent('тонкое');

		sizeButtonElems[0] && (await userEvent.click(sizeButtonElems[0]));
		expect(sizeButtonElems[0]).toHaveTextContent('26');

		await userEvent.click(addButtonElem);
		expect(JSON.parse(localStorage.chosenPizzas)).toStrictEqual(
			differentSizeAndDoughChosenPizzas
		);
	});
});
