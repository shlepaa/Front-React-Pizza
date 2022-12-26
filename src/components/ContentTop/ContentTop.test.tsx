import setRender from '../../helpers/setRender';
import { ContentTop } from './ContentTop';
import { screen } from '@testing-library/dom';
import * as fillWithNumbers from '../../helpers/fillWithNumbers';

describe('ContentTop', () => {
	it('Should follow the structure', async () => {
		const spyFunc = jest.spyOn(fillWithNumbers, 'default');
		setRender(<ContentTop />);
		const sortElem = await screen.findByTestId('sort-wrapper');
		expect(spyFunc).toHaveBeenCalled();
		expect(sortElem).toBeInTheDocument();
	});
});
