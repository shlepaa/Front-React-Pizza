import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

const getISsSortedToDown = (
	state?: Pick<RootState, 'pizzaSortReducer'>
): boolean => state?.pizzaSortReducer?.isSortedToDown || false;

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getISsSortedToDown()).toBe(false);
	});

	it('with filled state', async () => {
		expect(
			getISsSortedToDown({
				pizzaSortReducer: { ...initialState, isSortedToDown: true },
			})
		).toBe(true);
	});
});
