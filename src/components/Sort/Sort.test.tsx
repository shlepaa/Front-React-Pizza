import { screen } from '@testing-library/react';
import { Sort } from './Sort';
import userEvent from '@testing-library/user-event';
import { initialState } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';
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

describe('Sort table where you can sort to up or down or by using params', () => {
	it('All pages / part pages performance', async () => {
		setRender(<Sort {...defaultProps} />, {
			pizzaSortReducer: {
				...initialState,
				isAllPages: false,
			},
		});
		const allPageButton = screen.getByTestId('all-pages-button');
		const partPageButton = screen.getByTestId('part-pages-button');

		expect(partPageButton).toHaveClass('active');

		await userEvent.click(allPageButton);
		expect(partPageButton).not.toHaveClass('active');
		expect(allPageButton).toHaveClass('active');
	});

	it('Other state for currentSortParam', async () => {
		setRender(<Sort {...defaultProps} />, {
			pizzaSortReducer: {
				...initialState,
				currentSortParam: {
					title: 'цене',
					param: 'currentPrice',
				},
			},
		});
		const buttonElem = screen.getByTestId('open-popuop-button');
		expect(buttonElem).toHaveTextContent('цене');
		const sortButtonElems = screen.getAllByTestId('sort-button');

		await userEvent.click(buttonElem);
		expect(screen.getByTestId('popup')).toHaveClass('popupActive');

		sortButtonElems[2] && (await userEvent.click(sortButtonElems[2]));
		expect(buttonElem).toHaveTextContent('алфавиту');

		sortButtonElems[0] && (await userEvent.click(sortButtonElems[0]));
		expect(buttonElem).toHaveTextContent('популярности');
	});

	it('Other state for isSortedToDown', async () => {
		setRender(<Sort {...defaultProps} />, {
			pizzaSortReducer: {
				...initialState,
				currentSortParam: {
					title: 'цене',
					param: 'currentPrice',
				},
				isSortedToDown: true,
			},
		});
		const sortUpDownButton = screen.getByTestId('sort-up-down-button');
		expect(sortUpDownButton).toHaveClass('down');

		await userEvent.click(sortUpDownButton);
		expect(sortUpDownButton).not.toHaveClass('down');
	});

	it('Sort up or down button', async () => {
		setRender(<Sort {...defaultProps} />);
		const sortUpDownButton = screen.getByTestId('sort-up-down-button');
		expect(sortUpDownButton).toHaveClass('down');

		await userEvent.click(sortUpDownButton);
		expect(sortUpDownButton).not.toHaveClass('down');

		await userEvent.click(sortUpDownButton);
		expect(sortUpDownButton).toHaveClass('down');
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

		sortButtonElems[0] && (await userEvent.click(sortButtonElems[0]));
		expect(buttonElem).toHaveTextContent('популярности');

		sortButtonElems[1] && (await userEvent.click(sortButtonElems[1]));
		expect(buttonElem).toHaveTextContent('цене');
		expect(sortButtonElems).toMatchSnapshot();
	});
});
