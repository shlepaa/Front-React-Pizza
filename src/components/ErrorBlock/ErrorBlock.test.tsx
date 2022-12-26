import setRender from '../../helpers/setRender';
import { screen } from '@testing-library/dom';
import { ErrorBlock } from './ErrorBlock';

describe('ErrorBlock', () => {
	it('Should follow the structure', () => {
		setRender(<ErrorBlock />);
		const wrapperElem = screen.getByTestId('error-wrapper');
		expect(wrapperElem).toMatchSnapshot();
	});
});
