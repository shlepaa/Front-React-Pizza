import setRender from '../../helpers/setRender';
import { PIzzaSkeletonBlock } from './PIzzaSkeletonBlock';
import { screen } from '@testing-library/dom';

describe('PIzzaSkeletonBlock', () => {
	it('Should follow the structuce', () => {
		setRender(<PIzzaSkeletonBlock />);
		const wrapperElem = screen.getByTestId('wrapper');
		expect(wrapperElem).toMatchSnapshot();
	});
});
