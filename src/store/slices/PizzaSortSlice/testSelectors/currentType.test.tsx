import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

const getCurrentType = (state?: Pick<RootState, 'pizzaSortReducer'>): string =>
	state?.pizzaSortReducer?.currentType || 'все';

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getCurrentType()).toBe('все');
	});

	it('with filled state', async () => {
		expect(
			getCurrentType({
				pizzaSortReducer: { ...initialState, currentType: 'мясная' },
			})
		).toBe('мясная');
	});
});
