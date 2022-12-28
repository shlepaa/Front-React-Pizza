import { IChosenPizza } from '../../../../interfaces/IChosenPizza';
import { RootState } from '../../../store';
import { initialState } from '../PizzasSlice';

const getPizzas = (state?: Pick<RootState, 'pizzasReducer'>): IChosenPizza[] =>
	state?.pizzasReducer?.pizzas || [];

const pizzas: IChosenPizza[] = [
	{
		id: '1',
		dough: 'тонкое',
		title: 'Пицца',
		count: 1,
		size: '30',
		image: 'http://google.com/image',
		price: 100,
	},
];

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getPizzas()).toStrictEqual([]);
	});

	it('with filled state', async () => {
		expect(
			getPizzas({
				pizzasReducer: { ...initialState, pizzas },
			})
		).toStrictEqual(pizzas);
	});
});
