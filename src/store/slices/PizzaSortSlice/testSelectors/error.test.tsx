import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

export const getError = (
	state?: Pick<RootState, 'pizzaSortReducer'>
): boolean => state?.pizzaSortReducer?.error || false;

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getError()).toBe(false);
	});

	it('with filled state', async () => {
		expect(
			getError({
				pizzaSortReducer: { ...initialState, error: true },
			})
		).toBe(true);
	});
});
