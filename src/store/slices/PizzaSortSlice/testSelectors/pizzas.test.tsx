import { IPizza } from '../../../../interfaces/IPizza';
import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

const getPizzas = (state?: Pick<RootState, 'pizzaSortReducer'>): IPizza[] =>
	state?.pizzaSortReducer?.pizzas || [];

const pizzas: IPizza[] = [
	{
		currentPrice: 100,
		image: 'http://google.com/image',
		title: 'Пицца',
		rating: 1,
		types: ['тестовая'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
		],
	},
];

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getPizzas()).toStrictEqual([]);
	});

	it('with filled state', async () => {
		expect(
			getPizzas({
				pizzaSortReducer: { ...initialState, pizzas },
			})
		).toStrictEqual(pizzas);
	});
});
