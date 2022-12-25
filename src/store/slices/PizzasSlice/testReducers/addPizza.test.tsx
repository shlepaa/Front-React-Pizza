import { IChosenPizza } from '../../../../interfaces/IChosenPizza';
import pizzasReducer, { addPizza, IUserState } from '../PizzasSlice';

const startedPizzas: IChosenPizza[] = [
	{
		dough: 'тонкое',
		title: 'Пицца',
		count: 1,
		size: '30',
		image: 'http://google.com/image',
		price: 100,
	},
	{
		dough: 'традиционное',
		title: 'Пицца2',
		count: 2,
		size: '30',
		image: 'http://google.com/image',
		price: 200,
	},
];

const pizzaToAdd: IChosenPizza = {
	dough: 'тонкое',
	title: 'Пицца',
	count: 1,
	size: '26',
	image: 'http://google.com/image',
	price: 100,
};

const initialState: IUserState = {
	pizzas: startedPizzas,
};

describe('Add pizza for cart page', () => {
	it('Add new pizza', () => {
		const changedState = pizzasReducer(initialState, addPizza(pizzaToAdd));
		expect(changedState.pizzas).toHaveLength(3);
		expect(changedState.pizzas).toStrictEqual([
			...startedPizzas,
			pizzaToAdd,
		]);
	});

	it('Add empty pizza', () => {
		const changedState = pizzasReducer(
			initialState,
			addPizza({} as IChosenPizza)
		);
		expect(changedState.pizzas).toHaveLength(2);
		expect(changedState.pizzas).toStrictEqual(startedPizzas);
	});
});
