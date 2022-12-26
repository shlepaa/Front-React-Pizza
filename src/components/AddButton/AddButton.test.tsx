import { screen } from '@testing-library/dom';
import { FC, useState } from 'react';
import setRender from '../../helpers/setRender';
import { AddButton } from './AddButton';
import userEvent from '@testing-library/user-event';

const TestWrapper: FC = () => {
	const [count, setCount] = useState<number>(1);

	const handlerSetCount = (inctremOrDecrem: string) => {
		if (inctremOrDecrem === 'increment') {
			setCount(count + 1);
		}
		if (inctremOrDecrem === 'decrement') {
			setCount(count !== 1 ? count - 1 : 1);
		}
	};

	return (
		<div>
			<AddButton setCount={handlerSetCount} count={count} />
		</div>
	);
};

describe('Set count and add it', () => {
	it('Check for performance', async () => {
		setRender(<TestWrapper />);
		const plusElem = screen.getByTestId('plus');
		const minusElem = screen.getByTestId('minus');
		const countElem = screen.getByTestId('count');
		expect(countElem).toHaveTextContent('1');

		await userEvent.click(minusElem);
		expect(countElem).toHaveTextContent('1');

		await userEvent.click(plusElem);
		expect(countElem).toHaveTextContent('2');

		await userEvent.click(minusElem);
		expect(countElem).toHaveTextContent('1');
	});
});
