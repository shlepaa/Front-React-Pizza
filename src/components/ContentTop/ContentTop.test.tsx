import setRender from '../../helpers/setRender';
import { ContentTop } from './ContentTop';
import { screen } from '@testing-library/dom';
import * as fillWithNumbers from '../../helpers/fillWithNumbers';
import { IUserState } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';

const sortInitialState: IUserState = {
	isLoading: false,
	error: false,
	pizzas: [],
	pizzasBackup: [],
	allPizzaTypes: [],
	currentType: 'все',
	searchValue: '',
	isSortedToDown: true,
	currentSortParam: {
		title: 'цене',
		param: 'currentPrice',
	},
};

describe('ContentTop', () => {
	it('Should display data after loading', async () => {
		setRender(<ContentTop />, {
			pizzaSortReducer: sortInitialState,
		});
		const categoriesWrapper = await screen.findByTestId(
			'categories-wrapper'
		);
		const sortWrapper = await screen.findByTestId('sort-wrapper');
		expect(categoriesWrapper).toBeInTheDocument();
		expect(sortWrapper).toBeInTheDocument();
	});

	it('If happened error display skeleton', () => {
		const spyFunc = jest.spyOn(fillWithNumbers, 'default');
		setRender(<ContentTop />, {
			pizzaSortReducer: { ...sortInitialState, isLoading: true },
		});
		const categorieSkeletonWrapper = screen.getByTestId('skeleton-wrapper');
		const categoryElem = screen.getAllByTestId('category');
		expect(spyFunc).toHaveBeenCalled();
		expect(categorieSkeletonWrapper).toBeInTheDocument();
		expect(categoryElem).toHaveLength(4);
		expect(categorieSkeletonWrapper).toMatchSnapshot();
	});
});
