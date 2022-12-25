import { IChosenPizza } from '../../../../interfaces/IChosenPizza';
import pizzasReducer, { reloadPizzas, IUserState } from '../PizzasSlice';

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

const newPizzas: IChosenPizza[] = [
	{
		dough: 'традиционное',
		title: 'Пицца',
		count: 2,
		size: '20',
		image: 'http://google.com/image',
		price: 100,
	},
	{
		dough: 'тонкое',
		title: 'Пицца2',
		count: 1,
		size: '40',
		image: 'http://google.com/image',
		price: 200,
	},
];

const initialState: IUserState = {
	pizzas: startedPizzas,
};

describe('Reload pizzas', () => {
	it('Set new pizzas', () => {
		const changedState = pizzasReducer(
			initialState,
			reloadPizzas(newPizzas)
		);
		expect(changedState.pizzas).toHaveLength(2);
		expect(changedState.pizzas).toStrictEqual(newPizzas);
	});

	it('With empty', () => {
		const changedState = pizzasReducer(initialState, reloadPizzas([]));
		expect(changedState.pizzas).toHaveLength(0);
		expect(changedState.pizzas).toStrictEqual([]);
	});
});
