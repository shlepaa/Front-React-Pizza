import setRender from '../../helpers/setRender';
import { PIzzaSkeletonBlock } from './PIzzaSkeletonBlock';
import { screen } from '@testing-library/dom';

describe('PIzzaSkeletonBlock', () => {
	it('Should follow the structure', () => {
		setRender(<PIzzaSkeletonBlock />);
		const wrapperElem = screen.getByTestId('wrapper');
		expect(wrapperElem).toMatchSnapshot();
	});
});
