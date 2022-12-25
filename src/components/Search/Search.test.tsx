import { Search } from './Search';
import userEvent from '@testing-library/user-event';
import setRender from '../../helpers/setRender';
import { screen } from '@testing-library/dom';
import * as hooks from '../../hooks/redux';

describe('Input for searching pizzas', () => {
	it('Set different values', async () => {
		const spyHook = jest.spyOn(hooks, 'useAppDispatch');
		setRender(<Search />);
		const seacrhElem = screen.getByTestId('search');
		const searchWrapperElem = screen.getByTestId('search-wrapper');
		expect(searchWrapperElem).toMatchSnapshot();
		expect(seacrhElem).toHaveValue('');
		expect(spyHook).toHaveBeenCalled();

		await userEvent.type(seacrhElem, 'пицца');
		expect(seacrhElem).toHaveValue('пицца');

		await userEvent.type(seacrhElem, 'грибная');
		expect(seacrhElem).toHaveValue('пиццагрибная');

		await userEvent.clear(seacrhElem);
		expect(seacrhElem).toHaveValue('');
	});
});
