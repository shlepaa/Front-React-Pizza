import setRender from '../../helpers/setRender';
import { CategoriesSkeleton } from './CategoriesSkeleton';
import { screen } from '@testing-library/dom';
import * as fillWithNumbers from '../../helpers/fillWithNumbers';

describe('CategoriesSkeleton', () => {
	it('Should follow the structure', () => {
		const spyFunc = jest.spyOn(fillWithNumbers, 'default');
		setRender(<CategoriesSkeleton count={4} />);
		const categoryElems = screen.getAllByTestId('category');
		const wrapperElem = screen.getByTestId('wrapper');
		expect(spyFunc).toHaveBeenCalled();
		expect(categoryElems).toHaveLength(4);
		expect(wrapperElem).toMatchSnapshot();
	});
});
