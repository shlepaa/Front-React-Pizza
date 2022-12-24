import { TypeParams } from '../../../../interfaces/TypeParams';
import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

export const getCurrentSortParam = (
	state?: Pick<RootState, 'pizzaSortReducer'>
): TypeParams =>
	state?.pizzaSortReducer?.currentSortParam || {
		title: 'популярности',
		param: 'rating',
	};

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getCurrentSortParam()).toStrictEqual({
			title: 'популярности',
			param: 'rating',
		});
	});

	it('with filled state', async () => {
		expect(
			getCurrentSortParam({
				pizzaSortReducer: {
					...initialState,
					currentSortParam: {
						title: 'цене',
						param: 'currentPrice',
					},
				},
			})
		).toStrictEqual({
			title: 'цене',
			param: 'currentPrice',
		});
	});
});
