import { IPizza } from '../../../../interfaces/IPizza';
import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

const getPizzasBackup = (
	state?: Pick<RootState, 'pizzaSortReducer'>
): IPizza[] => state?.pizzaSortReducer?.pizzasBackup || [];

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
		expect(getPizzasBackup()).toStrictEqual([]);
	});

	it('with filled state', async () => {
		expect(
			getPizzasBackup({
				pizzaSortReducer: { ...initialState, pizzasBackup: pizzas },
			})
		).toStrictEqual(pizzas);
	});
});
