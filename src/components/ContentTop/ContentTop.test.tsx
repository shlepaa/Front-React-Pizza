import setRender from '../../helpers/setRender';
import { ContentTop } from './ContentTop';
import { screen } from '@testing-library/dom';
import * as fillWithNumbers from '../../helpers/fillWithNumbers';
import { initialState } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';

describe('Displays categories and sort table if loaded', () => {
	it('If loaded', async () => {
		setRender(<ContentTop />, {
			pizzaSortReducer: {
				...initialState,
				isLoading: false,
			},
		});
		const categoriesWrapper = await screen.findByTestId(
			'categories-wrapper'
		);
		const sortWrapper = await screen.findByTestId('sort-wrapper');
		expect(categoriesWrapper).toBeInTheDocument();
		expect(sortWrapper).toBeInTheDocument();
	});

	it('If data is loading or threw error display skeleton', () => {
		const spyFunc = jest.spyOn(fillWithNumbers, 'default');
		setRender(<ContentTop />, {
			pizzaSortReducer: {
				...initialState,
				isLoading: true,
				error: true,
			},
		});
		const categorieSkeletonWrapper = screen.getByTestId('skeleton-wrapper');
		const categoryElem = screen.getAllByTestId('category');
		expect(spyFunc).toHaveBeenCalled();
		expect(categorieSkeletonWrapper).toBeInTheDocument();
		expect(categoryElem).toHaveLength(4);
		expect(categorieSkeletonWrapper).toMatchSnapshot();
	});
});
