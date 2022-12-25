import { screen } from '@testing-library/react';
import { Sort } from './Sort';
import userEvent from '@testing-library/user-event';
import { IUserState } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';
import React from 'react';
import setRender from '../../helpers/setRender';
import { IDefaultProps } from '../../interfaces/IDefaultProps';
import sortParams from '../../helpers/sortParams';

const defaultProps: IDefaultProps = {
	sortParams: [
		{ param: 'rating', title: 'популярности' },
		{ param: 'currentPrice', title: 'цене' },
		{ param: 'title', title: 'алфавиту' },
	],
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

describe('Sort table where you can sort to up or down or by using params', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('Other state for currentSortParam', async () => {
		const spy = jest.spyOn(React, 'useEffect');
		setRender(<Sort {...defaultProps} />, {
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
		setRender(<Sort {...defaultProps} />, {
			pizzaSortReducer: sortInitialState,
		});
		const sortUpDownButton = screen.getByTestId('sort-up-down-button');
		expect(sortUpDownButton).toHaveClass('down');

		await userEvent.click(sortUpDownButton);
		expect(sortUpDownButton).not.toHaveClass('down');
		expect(localStorage.isDown).toBe('false');
	});

	it('Sort up or down button', async () => {
		setRender(<Sort {...defaultProps} />);
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
		setRender(<Sort {...defaultProps} />);
		const buttonElem = screen.getByTestId('open-popuop-button');
		expect(buttonElem).toBeInTheDocument();
		expect(screen.getByTestId('popup')).not.toHaveClass('popupActive');

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).toHaveClass('popupActive');

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).not.toHaveClass('popupActive');
	});

	it('Sort buttons performance', async () => {
		setRender(<Sort sortParams={sortParams} />);
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
		expect(sortButtonElems).toMatchSnapshot();
	});
});
