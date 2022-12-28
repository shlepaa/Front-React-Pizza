import { IChosenPizza } from '../../../../interfaces/IChosenPizza';
import pizzasReducer, { clearPizzas, IUserState } from '../PizzasSlice';

const startedPizzas: IChosenPizza[] = [
	{
		id: '1',
		dough: 'тонкое',
		title: 'Пицца',
		count: 1,
		size: '30',
		image: 'http://google.com/image',
		price: 100,
	},
	{
		id: '2',
		dough: 'традиционное',
		title: 'Пицца2',
		count: 2,
		size: '30',
		image: 'http://google.com/image',
		price: 200,
	},
];

const initialState: IUserState = {
	pizzas: startedPizzas,
};

describe('clearPizzas', () => {
	it('Clear pizzas', () => {
		const changedState = pizzasReducer(initialState, clearPizzas());
		expect(changedState.pizzas).toHaveLength(0);
	});
});
