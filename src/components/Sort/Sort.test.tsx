import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';
import { Sort } from './Sort';
import userEvent from '@testing-library/user-event';
import { IUserState } from '../../store/reducers/PizzaSortSlice';
import React from 'react';

const setRender = <T,>(store?: Record<string, T>) => {
	return render(
		<Provider store={createReduxStore(store)}>
			<Sort
				sortParams={[
					{ param: 'rating', title: 'популярности' },
					{ param: 'currentPrice', title: 'цене' },
					{ param: 'title', title: 'алфавиту' },
				]}
			/>
		</Provider>
	);
};

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

describe('Sort', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('Other state for currentSortParam', async () => {
		const spy = jest.spyOn(React, 'useEffect');
		setRender({
			pizzaSortReducer: sortInitialState,
		});
		const buttonElem = screen.getByTestId('open-popuop-button');
		expect(buttonElem).toHaveTextContent('цене');
		const sortButtonElems = screen.getAllByTestId('sort-button');
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).toHaveClass('popupActive');

		sortButtonElems[2] && (await userEvent.click(sortButtonElems[2]));
		expect(buttonElem).toHaveTextContent('алфавиту');
		expect(JSON.parse(localStorage.currentSortParam)).toEqual({
			param: 'title',
			title: 'алфавиту',
		});

		sortButtonElems[0] && (await userEvent.click(sortButtonElems[0]));
		expect(buttonElem).toHaveTextContent('популярности');
		expect(JSON.parse(localStorage.currentSortParam)).toEqual({
			param: 'rating',
			title: 'популярности',
		});
	});

	it('Other state for isSortedToDown', async () => {
		setRender({
			pizzaSortReducer: sortInitialState,
		});
		const sortUpDownButton = screen.getByTestId('sort-up-down-button');
		expect(sortUpDownButton).toHaveClass('down');

		await userEvent.click(sortUpDownButton);
		expect(sortUpDownButton).not.toHaveClass('down');
		expect(localStorage.isDown).toBe('false');
	});

	it('Sort up or down button', async () => {
		setRender();
		const sortUpDownButton = screen.getByTestId('sort-up-down-button');
		expect(sortUpDownButton).not.toHaveClass('down');

		await userEvent.click(sortUpDownButton);
		expect(sortUpDownButton).toHaveClass('down');
		expect(localStorage.isDown).toBe('true');

		await userEvent.click(sortUpDownButton);
		expect(sortUpDownButton).not.toHaveClass('down');
		expect(localStorage.isDown).toBe('false');
	});

	it('Popup opening', async () => {
		setRender();
		const buttonElem = screen.getByTestId('open-popuop-button');
		expect(buttonElem).toBeInTheDocument();
		expect(screen.getByTestId('popup')).not.toHaveClass('popupActive');

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).toHaveClass('popupActive');

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).not.toHaveClass('popupActive');
	});

	it('Sort buttons performance', async () => {
		setRender();
		const buttonElem = screen.getByTestId('open-popuop-button');
		expect(buttonElem).toHaveTextContent('популярности');
		const sortButtonElems = screen.getAllByTestId('sort-button');
		expect(sortButtonElems[0]).toBeInTheDocument();

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).toHaveClass('popupActive');

		sortButtonElems[2] && (await userEvent.click(sortButtonElems[2]));
		expect(buttonElem).toHaveTextContent('алфавиту');
		expect(JSON.parse(localStorage.currentSortParam)).toEqual({
			param: 'title',
			title: 'алфавиту',
		});

		sortButtonElems[0] && (await userEvent.click(sortButtonElems[0]));
		expect(buttonElem).toHaveTextContent('популярности');
		expect(JSON.parse(localStorage.currentSortParam)).toEqual({
			param: 'rating',
			title: 'популярности',
		});

		sortButtonElems[1] && (await userEvent.click(sortButtonElems[1]));
		expect(buttonElem).toHaveTextContent('цене');
	});
});
