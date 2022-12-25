import { UlSizes } from './UlSizes';
import userEvent from '@testing-library/user-event';
import setRender from '../../helpers/setRender';
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import { screen } from '@testing-library/dom';

interface TestWrapperProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	allSizes: string[];
}

const TestWrapper: FC<TestWrapperProps> = ({ allSizes }) => {
	const [size, setSize] = useState<string>('26');

	const handleSetSize = (currentSize: string) => {
		setSize(currentSize);
	};

	return (
		<div>
			<UlSizes
				currentSize={size}
				setSize={handleSetSize}
				allSizes={allSizes}
			/>
		</div>
	);
};

describe('Table with all sizes for current pizza', () => {
	it('With filled sizes', async () => {
		setRender(<TestWrapper allSizes={['26', '30', '40']} />);
		const buttonElems = screen.getAllByTestId('size-button');
		expect(buttonElems).toHaveLength(3);
		expect(buttonElems[0]).toHaveClass('active');

		buttonElems[1] && (await userEvent.click(buttonElems[1]));
		expect(buttonElems[1]).toHaveClass('active');
		expect(buttonElems[0]).not.toHaveClass('active');

		buttonElems[2] && (await userEvent.click(buttonElems[2]));
		expect(buttonElems[2]).toHaveClass('active');
		expect(buttonElems[1]).not.toHaveClass('active');
	});

	it('Without sizes', () => {
		setRender(<TestWrapper allSizes={[]} />);
		const buttonElem = screen.queryByTestId('size-button');
		expect(buttonElem).not.toBeInTheDocument();
	});
});
