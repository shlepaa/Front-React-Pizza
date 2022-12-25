import setRender from '../setRender';
import { screen } from '@testing-library/react';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { useAppSelector } from '../../hooks/redux';

const initialState = {
	test: 'test text',
};

interface TestComponentProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	testProp?: string;
}

const TestComponent: FC<TestComponentProps> = ({ testProp }) => {
	const { test } = useAppSelector((state) => state.testReducer);
	return (
		<h1 data-testid="h1-test">
			Test
			{testProp && <span data-testid="span-test">{testProp}</span>}
			<span data-testid="state-test">{test}</span>
		</h1>
	);
};

describe('setRender', () => {
	it('Performance without props', () => {
		setRender(<TestComponent />);
		const headingElem = screen.getByTestId('h1-test');
		expect(screen.queryByTestId('span-test')).not.toBeInTheDocument();
		expect(headingElem).toBeInTheDocument();
		expect(headingElem).toHaveTextContent('Test');
	});

	it('With props', () => {
		setRender(<TestComponent testProp="span element" />);
		const headingElem = screen.getByTestId('h1-test');
		const spanElem = screen.getByTestId('span-test');
		expect(spanElem).toBeInTheDocument();
		expect(headingElem).toBeInTheDocument();
		expect(headingElem).toHaveTextContent('Test');
		expect(spanElem).toHaveTextContent('span element');
	});

	it('With state', () => {
		setRender(<TestComponent />, {
			testReducer: initialState,
		});
		const stateElem = screen.getByTestId('state-test');
		expect(stateElem).toHaveTextContent('test');
		expect(stateElem).toBeInTheDocument();
		expect(stateElem).toHaveTextContent('test text');
	});
});
