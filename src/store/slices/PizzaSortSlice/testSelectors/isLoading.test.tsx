import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

const getIsLoading = (state?: Pick<RootState, 'pizzaSortReducer'>): boolean =>
	state?.pizzaSortReducer?.isLoading || false;

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getIsLoading()).toBe(false);
	});

	it('with filled state', async () => {
		expect(
			getIsLoading({
				pizzaSortReducer: { ...initialState, isLoading: true },
			})
		).toBe(true);
	});
});
